const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/MasterPlan.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace grid class
content = content.replace(
  /className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-\[1100px\] mx-auto"/,
  'className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[760px] mx-auto"'
);

fs.writeFileSync(file, content);
console.log('Grid patched successfully');
