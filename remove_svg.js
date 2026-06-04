const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'vrx', 'components');

const regex = /<svg\s+width="28"\s+height="14"\s+viewBox="0 0 28 14"[\s\S]*?<path d="M2 12 Q14 2 26 12"[\s\S]*?<\/svg>/g;

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(dir);
let count = 0;
files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  if (regex.test(content)) {
    const newContent = content.replace(regex, '');
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Replaced in ${file}`);
    count++;
  }
});
console.log(`Total replaced: ${count}`);
