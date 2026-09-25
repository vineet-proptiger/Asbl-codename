const fs = require('fs');

function replaceInFile(file, oldText, newText) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(new RegExp(oldText, 'g'), newText);
  fs.writeFileSync(file, content);
}

replaceInFile('components/new-launch-hyderabad/components/Navbar.jsx', 'Purva Estrella', 'ASBL Legacy');
replaceInFile('components/new-launch-hyderabad/components/Hero.jsx', 'Purva Estrella', 'ASBL Legacy');
replaceInFile('components/new-launch-hyderabad/components/Gallery.jsx', 'Purva Estrella', 'ASBL Legacy');

console.log('Components text patched successfully');
