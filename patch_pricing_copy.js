const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Pricing.jsx';
let content = fs.readFileSync(file, 'utf8');

const newUnits = `const units = [
  {
    type: "Luxe 3 BHK",
    subtitle: "LUXURY RESIDENCES",
    tagline: "Modern Urban Living",
    size: "1970 Sq.ft.",
    price: "₹ 1.99Cr*",
    priceSub: "Starting At",
    btnText: "GET DETAILS",
    features: [
      "Super Built-up: 1970 Sq.ft.",
      "Premium Specifications",
      "Luxury Finishes",
    ],
    isPopular: false,
  },
  {
    type: "Premium 3 BHK + Study",
    subtitle: "PREMIUM RESIDENCES",
    tagline: "Spacious & Elegant",
    size: "2085 Sq.ft.",
    price: "Ask For Price",
    priceSub: "Price on Request",
    btnText: "GET DETAILS",
    features: [
      "Super Built-up: 2085 Sq.ft.",
      "Premium Specifications",
      "Luxury Finishes",
    ],
    isPopular: true,
  },
  {
    type: "Luxe 4 BHK",
    subtitle: "PALATIAL RESIDENCES",
    tagline: "Grandeur & Elite Space",
    size: "3015 Sq.ft.",
    price: "Ask For Price",
    priceSub: "Price on Request",
    btnText: "GET DETAILS",
    features: [
      "Super Built-up: 3015 Sq.ft.",
      "Premium Specifications",
      "Luxury Finishes",
    ],
    isPopular: false,
  }
];`;

content = content.replace(
  /const units = \[[\s\S]*?\];/,
  newUnits
);

fs.writeFileSync(file, content);
console.log('Pricing patched successfully');
