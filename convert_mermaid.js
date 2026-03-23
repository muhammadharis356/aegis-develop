const fs = require('fs');
const { execSync } = require('child_process');

const mdFile = 'd:/aegis-develop/Final-Documentation/Aegis_AI_FYP_Documentation.md';
let content = fs.readFileSync(mdFile, 'utf8');

const regex = /```mermaid\n([\s\S]*?)```/g;
let match;
let counter = 1;

let newContent = content;
const matches = [];
while ((match = regex.exec(content)) !== null) {
  matches.push({ full: match[0], code: match[1], id: counter++ });
}

console.log(`Found ${matches.length} Mermaid diagrams. Processing...`);

for (const m of matches) {
  const mmdFile = `d:/aegis-develop/Final-Documentation/diagram_${m.id}.mmd`;
  const pngFile = `d:/aegis-develop/Final-Documentation/diagram_${m.id}.png`;
  
  fs.writeFileSync(mmdFile, m.code);
  console.log(`Generating diagram_${m.id}.png...`);
  try {
    if (!fs.existsSync(pngFile)) {
      execSync(`mmdc -i ${mmdFile} -o ${pngFile} -b transparent --scale 2`, { stdio: 'inherit' });
    }
    newContent = newContent.replace(m.full, `![Diagram ${m.id}](diagram_${m.id}.png)`);
  } catch (e) {
    console.error(`Failed to generate diagram ${m.id}:`, e.message);
  }
}

fs.writeFileSync('d:/aegis-develop/Final-Documentation/Aegis_AI_FYP_Documentation_Images.md', newContent);
console.log('Replaced all diagrams with PNGs and saved to Aegis_AI_FYP_Documentation_Images.md');
