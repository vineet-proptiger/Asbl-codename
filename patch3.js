const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Navbar.jsx';
let content = fs.readFileSync(file, 'utf8');

// The .nav-logo default is currently NOT patched:
// .nav-logo {
//   height: 34px !important;
//   min-height: 34px !important;
content = content.replace(
  /\.nav-logo \{\s*height: 34px !important;\s*min-height: 34px !important;/g,
  '.nav-logo {\n          height: 44px !important;\n          min-height: 44px !important;'
);

// The grouped .nav-logo in media queries:
// 1281px
content = content.replace(
  /\.header_style2\.scrolled-up-expanded \.nav-logo \{\s*height: 36px !important;\s*min-height: 36px !important;/g,
  '.header_style2.scrolled-up-expanded .nav-logo {\n            height: 46px !important;\n            min-height: 46px !important;'
);

// 1440px
content = content.replace(
  /\.header_style2\.scrolled-up-expanded \.nav-logo \{\s*height: 38px !important;\s*min-height: 38px !important;/g,
  '.header_style2.scrolled-up-expanded .nav-logo {\n            height: 48px !important;\n            min-height: 48px !important;'
);

// 1680px
content = content.replace(
  /\.header_style2\.scrolled-up-expanded \.nav-logo \{\s*height: 42px !important;\s*min-height: 42px !important;/g,
  '.header_style2.scrolled-up-expanded .nav-logo {\n            height: 52px !important;\n            min-height: 52px !important;'
);

fs.writeFileSync(file, content);
console.log('patched 3');
