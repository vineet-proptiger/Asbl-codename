const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Highlights.jsx';
let content = fs.readFileSync(file, 'utf8');

// Title
content = content.replace(
  /PROJECT HIGHLIGHTS & USPS/,
  'PROJECT HIGHLIGHTS: ASBL CODENAME'
);

// Highlight 1
content = content.replace(/Lokhandwala Address/g, 'High-Rise Towers');
content = content.replace(/Mumbai's most iconic lifestyle circle/g, 'Premium high-rise towers in Central Hyderabad designed for modern and elegant urban living.');
// Keep emoji 🏙️

// Highlight 2
content = content.replace(/Spacious Balconies/g, 'Prime Location');
content = content.replace(/Private outdoor spaces with city views/g, 'Prime location at Nallakunta near RTC X Roads offering unparalleled convenience and access.');
content = content.replace(/🌅/, '📍');

// Highlight 3
content = content.replace(/750–1700 Sq\.Ft/g, 'World-Class Lifestyle');
content = content.replace(/Smart to expansive layouts for every need/g, 'Experience a world-class lifestyle with exclusive clubhouse and recreational amenities.');
content = content.replace(/📐/, '💎');

// Highlight 4
content = content.replace(/Purvankara Pedigree/g, 'Excellent Connectivity');
content = content.replace(/45\+ years of trusted delivery track record/g, 'Excellent connectivity to key city hubs ensuring you are always close to what matters.');
content = content.replace(/🏛️/, '🛣️'); // Changed to road/highway emoji

// Highlight 5
content = content.replace(/Green Landscaping/g, 'Gated Community');
content = content.replace(/Curated gardens and open green spaces/g, 'A modern gated community tailored for a secure, peaceful and vibrant urban living experience.');
content = content.replace(/🌿/, '🏡');

// Highlight 6
content = content.replace(/Metro Connectivity/g, 'Premium Construction');
content = content.replace(/Minutes from metro & railway stations/g, 'Superior premium construction with elegant design focusing on every minute detail.');
content = content.replace(/🚇/, '🏗️');

fs.writeFileSync(file, content);
console.log('Highlights patched successfully');
