const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Navbar.jsx';
let content = fs.readFileSync(file, 'utf8');

// Default .nav-logo
content = content.replace(
  /(\.nav-logo \{[\s\S]*?)height: 34px !important;\s*min-height: 34px !important;/g,
  '$1height: 44px !important;\n          min-height: 44px !important;'
);

// 1281px - 1439px
content = content.replace(
  /(@media \(min-width: 1281px\)[\s\S]*?\.nav-logo \{[\s\S]*?)height: 36px !important;\s*min-height: 36px !important;/g,
  '$1height: 46px !important;\n            min-height: 46px !important;'
);

// 1440px - 1679px
content = content.replace(
  /(@media \(min-width: 1440px\)[\s\S]*?\.nav-logo \{[\s\S]*?)height: 38px !important;\s*min-height: 38px !important;/g,
  '$1height: 48px !important;\n            min-height: 48px !important;'
);

// 1680px+
content = content.replace(
  /(@media \(min-width: 1680px\)[\s\S]*?\.nav-logo \{[\s\S]*?)height: 42px !important;\s*min-height: 42px !important;/g,
  '$1height: 52px !important;\n            min-height: 52px !important;'
);

fs.writeFileSync(file, content);
console.log('nav-logo patched');
