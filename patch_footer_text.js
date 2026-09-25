const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Footer.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldText = 'Puravankara Group Established in 1975 , a renowned name in real estate industry known for its unwavering commitment to quality and innovation shaping the landscape of urban living. With a diverse portfolio spanning residential, commercial, retail, and hospitality sectors, Puravankara has left an indelible mark in key cities like Bangalore, Chennai, Hyderabad, Pune, and Andheri. Their projects not only showcase architectural brilliance but also prioritize sustainability, reflecting the group’s dedication to environmentally conscious development.';
const newText = 'Building spaces that inspire life, work, and well-being. ASBL is committed to shaping sustainable developments across Hyderabad, where thoughtful design meets elevated living. Our spaces are envisioned as more than just structures — they are vibrant ecosystems that foster collaboration, innovation, and a strong sense of community. With a carefully diversified portfolio across premium locations in Hyderabad, spanning delivered landmarks, near-possession developments, and upcoming iconic projects, we continue to set new benchmarks in sustainable real estate. At the heart of every development lies our singular vision: to enhance well-being and become the most preferred real estate brand in Hyderabad.';

content = content.replace(oldText, newText);

// Fix subtitle
content = content.replace(
  /Landmark Integrated Development — Lokhandwala, Andheri West, Mumbai/,
  'Landmark Integrated Development — RTC X Roads, Hyderabad'
);

// Fix Copyright
content = content.replace(
  /2026 Purva Estrella/,
  '2026 ASBL Legacy RTC X Roads'
);

// Rera No doesn't need to be changed if they haven't given it, but let's just leave it or if it is camelot's RERA, I should check camelot's RERA.

fs.writeFileSync(file, content);
console.log('Footer text patched successfully');
