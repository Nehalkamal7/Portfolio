const https = require('https');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'downloaded_images');

function download(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(outDir, filename);
    const file = fs.createWriteStream(dest);
    
    function get(currentUrl) {
      https.get(currentUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Status ${res.statusCode} for ${currentUrl}`));
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const size = fs.statSync(dest).size;
            console.log(`Saved ${filename} (${size} bytes)`);
            resolve(dest);
          });
        });
      }).on('error', reject);
    }
    
    get(url);
  });
}

async function main() {
  const list = [
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/EDUvision/main/backend/uploads/course_1.png', name: 'eduvision_course_1.png' },
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/EDUvision/main/backend/uploads/course_26558_1931.png', name: 'eduvision_course_2.png' },
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/EDUvision/main/backend/uploads/course_42432_8112.png', name: 'eduvision_course_3.png' },
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/EDUvision/main/backend/uploads/faces/student_5.jpg', name: 'eduvision_student_5.jpg' },
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/EDUvision/main/frontend/public/seba-logo.png', name: 'eduvision_logo.png' },
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/EDUvision/main/frontend/public/book.png', name: 'eduvision_book.png' }
  ];

  for (const item of list) {
    try {
      await download(item.url, item.name);
    } catch(e) {
      console.log(`Failed: ${item.name} (${e.message})`);
    }
  }
}

main();
