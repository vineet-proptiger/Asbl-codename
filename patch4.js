const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Navbar.jsx';
let content = fs.readFileSync(file, 'utf8');

// Restore 380px max-width to 38px
content = content.replace(
  /@media \(max-width: 380px\) \{\s*\.nav-logo,[\s\S]*?\{[\s\S]*?min-height: 48px !important;/g,
  '@media (max-width: 380px) {\n            .nav-logo,\n            .header_style2.sticky .nav-logo,\n            .header_style2.scrolled-up-expanded .nav-logo {\n              height: 38px !important;\n              min-height: 38px !important;'
);

// Restore default .nav-logo back to 34px -> wait, 34px or 44px? 
// Default originally was 34px. Since it's for "bdi device me only", maybe I should just increase 1281, 1440, 1680?
// Actually the "Default" block at the top applies to ALL sizes unless overridden.
// If I increase it, I should also make sure mobile (991px max-width) overrides it if needed.
// Max-width 991px has height: 48px !important. So mobile is 48px. 
// Default was 34px, so large screens without media query were 34px. 
// I've now made it 44px (actually 48px). Let me fix the default block to 44px.

// Find the first default block
content = content.replace(
  /\.nav-logo,[\s\S]*?\.header_style2\.scrolled-up-expanded \.nav-logo \{\s*height: 48px !important;\s*min-height: 48px !important;/i,
  '.nav-logo,\n        .header_style2.sticky .nav-logo,\n        .header_style2.scrolled-up-expanded .nav-logo {\n          height: 44px !important;\n          min-height: 44px !important;'
);

fs.writeFileSync(file, content);
console.log('patched 4');
