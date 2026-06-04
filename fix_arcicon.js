const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'vrx', 'components');

const regex = /const ArcIcon = \(\) => \([\s\S]*?\)/g;

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
    const newContent = content.replace(regex, 'const ArcIcon = () => null');
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Replaced ArcIcon in ${file}`);
    count++;
  }
});
console.log(`Total replaced: ${count}`);
