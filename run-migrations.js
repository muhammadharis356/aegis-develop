/**
 * Direct migration runner — bypasses sequelize-cli (broken on Node v24)
 * Reads the .env from Servers/.env and runs migrations via Sequelize QueryInterface directly
 */
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// Load env
const envPath = path.join(__dirname, 'Servers', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m) env[m[1].trim()] = m[2].trim().replace(/^"(.*)"$/, '$1');
});

const sequelize = new Sequelize(
  env.DB_NAME || 'aegisai',
  env.DB_USER || 'postgres',
  env.DB_PASSWORD || 'test',
  {
    host: env.DB_HOST || 'localhost',
    port: parseInt(env.DB_PORT || '5432'),
    dialect: 'postgres',
    logging: false,
  }
);

async function run() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to PostgreSQL');

    const qi = sequelize.getQueryInterface();

    // Create SequelizeMeta table to track migrations
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS "SequelizeMeta" (
        name VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY
      );
    `);

    const migrationsDir = path.join(__dirname, 'Servers', 'database', 'migrations');
    const files = fs.readdirSync(migrationsDir)
      .filter(f => f.endsWith('.js'))
      .sort();

    // Get already run migrations
    const [ran] = await sequelize.query('SELECT name FROM "SequelizeMeta"');
    const ranNames = new Set(ran.map(r => r.name));

    let count = 0;
    for (const file of files) {
      if (ranNames.has(file)) {
        console.log(`  ⏭️  ${file} (already run)`);
        continue;
      }
      try {
        const migration = require(path.join(migrationsDir, file));
        await migration.up(qi, Sequelize);
        await sequelize.query('INSERT INTO "SequelizeMeta" (name) VALUES ($1)', {
          bind: [file],
          type: Sequelize.QueryTypes.INSERT,
        });
        console.log(`  ✅ ${file}`);
        count++;
      } catch (err) {
        console.log(`  ⚠️  ${file} — ${err.message.split('\n')[0]}`);
      }
    }
    console.log(`\n✅ Done — ran ${count} migrations`);
    await sequelize.close();
  } catch (err) {
    console.error('❌ Fatal:', err.message);
    process.exit(1);
  }
}

run();
