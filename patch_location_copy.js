const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Location.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the locationLandmarks array entirely
const newLocationLandmarks = `const locationLandmarks = [
  { name: 'RTC X Roads Metro Station', dist: '3 min' },
  { name: 'Secunderabad Railway Station', dist: '10 min' },
  { name: 'KIMS Hospital', dist: '2 km' },
  { name: 'Apollo Hospital, Hyderguda', dist: '3 km' },
  { name: 'Osmania University', dist: '3 km' },
  { name: 'Narayana Junior College', dist: '1 km' },
  { name: 'City Center Mall', dist: '3 km' },
  { name: 'GVK One Mall', dist: '6 km' },
]`;
content = content.replace(
  /const locationLandmarks = \[[\s\S]*?\]/,
  newLocationLandmarks
);

// Replace the Origin text
content = content.replace(
  /📍 Origin: Purva Estrella/,
  '📍 Origin: ASBL RTC X Road'
);

// Replace the Iframe src
// The old one starts with https://www.google.com/maps/embed?pb=...
const newIframeSrc = 'https://www.google.com/maps?cid=11734109689802454663&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en&gl=IN&source=embed&output=embed';
content = content.replace(
  /src="https:\/\/www\.google\.com\/maps\/embed\?pb=[^"]+"/,
  `src="${newIframeSrc}"`
);

fs.writeFileSync(file, content);
console.log('Location patched successfully');
