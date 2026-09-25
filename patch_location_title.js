const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Location.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /LOCATION ADVANTAGES/,
  'LOCATION ADVANTAGES: RTC X CROSS ROAD'
);

fs.writeFileSync(file, content);
console.log('Title patched successfully');
