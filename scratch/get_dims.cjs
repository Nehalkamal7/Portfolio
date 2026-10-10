const fs = require('fs');
const path = require('path');

function getPngDimensions(filePath) {
  const fd = fs.openSync(filePath, 'r');
  const buffer = Buffer.alloc(24);
  fs.readSync(fd, buffer, 0, 24, 0);
  fs.closeSync(fd);
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

const dir = path.join(__dirname, 'downloaded_images');
const files = fs.readdirSync(dir);
for (const f of files) {
  if (f.endsWith('.png')) {
    const dim = getPngDimensions(path.join(dir, f));
    console.log(`${f}: ${dim.width}x${dim.height}`);
  }
}
