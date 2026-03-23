const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const seq = new Sequelize('aegisai', 'postgres', 'test', {
  host: 'localhost', port: 5432, dialect: 'postgres', logging: false
});

async function run() {
  await seq.authenticate();
  console.log('DB connected');
  await seq.query('CREATE TABLE IF NOT EXISTS "SequelizeMeta" (name VARCHAR(255) NOT NULL PRIMARY KEY)');

  const dir = path.join(__dirname, 'database', 'migrations');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();
  console.log('Migration files:', files.length);

  const [ran] = await seq.query('SELECT name FROM "SequelizeMeta"');
  const ranNames = new Set(ran.map(r => r.name));

  let ok = 0, skip = 0, fail = 0;
  for (const file of files) {
    if (ranNames.has(file)) { skip++; continue; }
    try {
      const m = require(path.join(dir, file));
      await m.up(seq.getQueryInterface(), Sequelize);
      await seq.query('INSERT INTO "SequelizeMeta" (name) VALUES ($1)', { bind: [file] });
      console.log('  + ' + file);
      ok++;
    } catch(e) {
      console.log('  x ' + file + ' -- ' + e.message.split('\n')[0]);
      fail++;
    }
  }
  console.log('\nDone. ok=' + ok + ' skip=' + skip + ' fail=' + fail);
  await seq.close();
}

run().catch(e => { console.error(e.message); process.exit(1); });
