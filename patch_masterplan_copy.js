const fs = require('fs');
let file = 'components/new-launch-hyderabad/components/MasterPlan.jsx';
let content = fs.readFileSync(file, 'utf8');

// Update Title
content = content.replace(
  /Site & Floor Plans/,
  'Floor Plans & Layout'
);

// Update Plans array
const newPlans = `const plans = [
  { 
    label: '3 BHK Floor Plan', 
    img: masterplanImages.bhk3 || masterplanImages.masterPlan,
    details: {
        superBuiltUp: '1970 - 2085 Sq. Ft.'
    }
  },
  { 
    label: '4 BHK Floor Plan', 
    img: masterplanImages.bhk4 || masterplanImages.masterPlan,
    details: {
        superBuiltUp: '3015 Sq. Ft.'
    }
  },
]`;

content = content.replace(
  /const plans = \[[\s\S]*?\]/,
  newPlans
);

fs.writeFileSync(file, content);
console.log('MasterPlan patched successfully');
