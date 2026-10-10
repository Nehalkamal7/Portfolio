const fs = require('fs');
const path = require('path');

function getJpegDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  let i = 0;
  if (buffer[i] !== 0xFF || buffer[i+1] !== 0xD8) return null;
  i += 2;
  while (i < buffer.length) {
    if (buffer[i] !== 0xFF) break;
    const marker = buffer[i+1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buffer.readUInt16BE(i + 5);
      const width = buffer.readUInt16BE(i + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}

const dir = path.join(__dirname, '..', 'public', 'projects');
const files = fs.readdirSync(dir);
for (const f of files) {
  const p = path.join(dir, f);
  if (f.endsWith('.jpg') || f.endsWith('.jpeg')) {
    console.log(f, getJpegDimensions(p));
  }
}
