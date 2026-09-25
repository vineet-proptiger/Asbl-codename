const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Location.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Micro Footer (commented code)
content = content.replace(
  /Prime Lokhandwala Corridor/g,
  'Prime RTC X Road Corridor'
);
content = content.replace(
  /Andheri West/g,
  'Hyderabad'
);
content = content.replace(
  /Lokhandwala, Andheri West, Mumbai/g,
  'RTC X Roads, Hyderabad'
);
// In case the exact string wasn't matched due to newlines
content = content.replace(
  /Lokhandwala, Hyderabad, Mumbai/, // "Andheri West" became "Hyderabad" in previous replace!
  'RTC X Roads, Hyderabad'
);

fs.writeFileSync(file, content);
console.log('Footer and Map overlay patched successfully');
