const fs = require('fs');
const path = require('path');

const map = [
  { match: /Hero Video.*?\"/i, src: '/images/grounds-night.jpg' },
  { match: /Hero Image/i, src: '/images/grounds-night.jpg' },
  { match: /Garden Cottage/i, src: '/images/cottage-exterior-1.jpg' },
  { match: /Premium/i, src: '/images/cottage-interior-1.jpg' },
  { match: /Family/i, src: '/images/cottage-exterior-2.jpg' },
  { match: /Cottage Interior/i, src: '/images/cottage-interior-2.png' },
  { match: /Hindu|Mandap/i, src: '/images/event-haldi-2.jpg' },
  { match: /Haldi/i, src: '/images/event-haldi-1.png' },
  { match: /Sangeet/i, src: '/images/event-sangeet-pink.jpg' },
  { match: /Poolside|Reception/i, src: '/images/event-poolside.png' },
  { match: /Corporate|Banquet|Dining Setup/i, src: '/images/event-corporate.png' },
  { match: /Dining|Restaurant/i, src: '/images/event-corporate.png' },
  { match: /Nikaah|Muslim/i, src: '/images/event-reception.jpg' },
  { match: /Sikh|Punjabi/i, src: '/images/event-haldi-3.jpg' },
  { match: /Picnic|High Tea/i, src: '/images/pool-picnic.png' },
  { match: /Pool/i, src: '/images/pool-picnic.png' },
  { match: /Lawn|Grounds/i, src: '/images/grounds-lawn.webp' },
  { match: /Gallery/i, src: '/images/cottage-exterior-3.webp' },
  { match: /Logo/i, src: '/images/logo.png' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      content = content.replace(/<Placeholder\s+([^>]+)>/g, (match, props) => {
        if (props.includes('src=')) return match;
        
        let foundSrc = '/images/cottage-exterior-1.jpg'; // default
        
        for (const item of map) {
          if (item.match.test(props)) {
            foundSrc = item.src;
            break;
          }
        }
        changed = true;
        return `<Placeholder src="${foundSrc}" ${props}>`;
      });

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
