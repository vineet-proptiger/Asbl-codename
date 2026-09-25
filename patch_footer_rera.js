const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Footer.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /PM1180002502319/,
  'Coming Soon'
);

fs.writeFileSync(file, content);
console.log('Rera patched successfully');
