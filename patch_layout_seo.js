const fs = require('fs');
let file = 'app/new-launch-hyderabad/layout.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/Purva Estrella Lokhandwala \| Luxury 2, 3 & 4 BHK Mumbai/g, 'ASBL Legacy | New Launch @ RTC X Roads, Hyderabad');
content = content.replace(/Purva Estrella in Lokhandwala, Andheri West, Mumbai offers luxury 2, 3 & 4 BHK homes with world-class amenities by Puravankara\. Enquire now for brochure!/g, 'ASBL Legacy is an iconic new launch at RTC X Roads, Hyderabad, offering premium 3 & 4 BHK luxury apartments designed for modern urban living.');
content = content.replace(/siteName: 'Purva Estrella'/g, "siteName: 'ASBL Legacy'");
content = content.replace(/alt: 'Purva Estrella Lokhandwala Mumbai'/g, "alt: 'ASBL Legacy RTC X Roads Hyderabad'");
content = content.replace(/"name": "Purva Estrella Lokhandwala"/g, '"name": "ASBL Legacy RTC X Roads"');
content = content.replace(/"description": "Purva Estrella, Mumbai's premium residential development in Lokhandwala offering 2\/3\/4 BHK luxury residences\."/g, '"description": "ASBL Legacy is an iconic new launch at RTC X Roads, Hyderabad, offering premium 3 & 4 BHK luxury apartments."');

fs.writeFileSync(file, content);
console.log('Layout SEO patched successfully');
