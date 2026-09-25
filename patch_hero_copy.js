const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Hero.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Title
content = content.replace(
  />\s*Purva Estrella\s*<\/span>/,
  '>\n            ASBL Legacy RTC X Roads\n          </span>'
);

// Replace Subtitle
content = content.replace(
  />\s*At Lokhandwala, Andheri West, Mumbai\.\s*<\/span>/,
  '>\n            New Launch @ RTC Cross Roads,Hyderabad\n          </span>'
);

// Replace Bullets
// The bullets are inside an array:
//           [
//             "Avail Spot Booking Offers",
//             "Get Early Buy Discounts",
//             "Flexipay for the 1st 100 Buyers",
//             "Spacious 2, 3 & 4 BHK Residences"
//           ].map((text, i) => (
const newBullets = `[
            "Iconic high-rise skyline living",
            "Prime central city address",
            "Massive 86,000 Sq. Ft. Clubhouse",
            "Sky-High Luxury Residences",
            "Live at the Heart of Hyderabad"
          ]`;
content = content.replace(
  /\[\s*"Avail Spot Booking Offers",\s*"Get Early Buy Discounts",\s*"Flexipay for the 1st 100 Buyers",\s*"Spacious 2, 3 & 4 BHK Residences"\s*\]/,
  newBullets
);

// Replace Price Line Title
content = content.replace(
  />\s*Luxury 2\/3\/4 BHK Residences Price Starts\s*<\/span>/,
  '>\n            3 & 4 BHK Luxury Apartments Starts\n          </span>'
);

// Replace Price Amount
content = content.replace(
  />\s*₹ 3\.38 Cr\*\s*<\/span>/,
  '>\n              ₹ 1.99Cr*\n            </span>'
);

fs.writeFileSync(file, content);
console.log('Hero copy patched successfully');
