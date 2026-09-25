const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/Overview.jsx';
let content = fs.readFileSync(file, 'utf8');

// Title
content = content.replace(
  />Purva Estrella<\/h2>/,
  '>ASBL RTC X Road</h2>'
);

// Subtitle
content = content.replace(
  />Premium Residences in Lokhandwala, Andheri West, Mumbai<\/h3>/,
  '>Premium 3 & 4 BHK Luxury Apartments in RTC X Roads, Hyderabad</h3>'
);

// Paragraph Drop Cap & Bold Name
content = content.replace(
  />\s*P\s*<\/span>/,
  '>\n                  A\n                </span>'
);
content = content.replace(
  />urva Estrella<\/span> is a premium residential development located at the prime Lokhandwala Circle in Andheri West. This exclusive project offers spacious and elegantly crafted 2, 3, and 4 BHK residences designed to elevate modern urban living. Each apartment is thoughtfully planned with refined aesthetics and superior functionality. Strategically positioned amid excellent connectivity and robust social infrastructure, the development ensures seamless access to hospitals, educational institutions, shopping malls, green spaces, and recreational hubs all just minutes away./,
  '>SBL RTC X Road</span> is an iconic new launch at RTC X Roads, Hyderabad, offering premium 3 & 4 BHK luxury apartments designed for modern urban living. Located in the heart of the city, this high-rise development features contemporary architecture, spacious layouts, and world-class amenities, providing a perfect blend of comfort and convenience.'
);

// Paragraph Expanded (Read More)
content = content.replace(
  /Strategically positioned with excellent access to Oshiwara Metro Station, New Link Road and Andheri Station, residents enjoy seamless connectivity to major commercial and social landmarks. Surrounded by renowned malls, hospitals and educational institutions./,
  'Spread across a thoughtfully planned development, it offers excellent connectivity to major IT hubs, reputed schools, hospitals, and entertainment zones, making it an ideal choice for families and professionals. With its prime central location, gated community living, and modern infrastructure, ASBL is set to become a landmark residential address in Hyderabad.'
);

// Box 1
content = content.replace(
  />2\.95 Acres<\/span>/,
  '>New Launch</span>'
);
content = content.replace(
  />TOTAL PROJECT AREA<\/span>/,
  '>PROJECT STATUS</span>'
);

// Box 2
content = content.replace(
  />6 Signature Towers <\/span>/,
  '>3 & 4 BHK Luxury</span>'
);
content = content.replace(
  />TOWERS<\/span>/,
  '>CONFIGURATION</span>'
);

// Also change the image alt tag just in case
content = content.replace(
  /alt="Purva Estrella - Tower Elevation"/,
  'alt="ASBL RTC X Road - Tower Elevation"'
);

fs.writeFileSync(file, content);
console.log('Overview patched successfully');
