const sharp = require('sharp');
const fs = require('fs');

async function compressImage() {
  try {
    const inputPath = 'public/images/ab.png';
    const outputPath = 'public/images/og-image.jpg';

    // WhatsApp needs < 300KB. 1200x630 is standard OG size.
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 80 }) // 80 quality usually yields < 100KB for 1200x630
      .toFile(outputPath);

    console.log('Successfully generated compressed OG image.');
    const stats = fs.statSync(outputPath);
    console.log(`New size: ${(stats.size / 1024).toFixed(2)} KB`);
  } catch (err) {
    console.error('Error compressing image:', err);
  }
}

compressImage();
