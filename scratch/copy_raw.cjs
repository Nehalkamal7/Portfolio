const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'downloaded_images');
const destDir = path.join(__dirname, '..', 'public', 'projects', 'raw');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
for (const f of files) {
  fs.copyFileSync(path.join(srcDir, f), path.join(destDir, f));
  console.log(`Copied ${f} to public/projects/raw/`);
}
