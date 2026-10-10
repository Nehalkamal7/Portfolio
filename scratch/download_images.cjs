const fs = require('fs');
const https = require('https');
const path = require('path');

const outDir = path.join(__dirname, 'downloaded_images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

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
  const images = [
    // HATHEQ README images
    { url: 'https://github.com/user-attachments/assets/2144304a-af3a-42ae-a6c9-407e77a9a8a0', name: 'hatheq_readme_1.png' },
    { url: 'https://github.com/user-attachments/assets/75c41cf8-5fbb-4b07-9e8f-a0c70a5aaad4', name: 'hatheq_readme_2.png' },
    
    // E-COMMERCE README image
    { url: 'https://github.com/user-attachments/assets/d0305d4d-4991-43c2-a8c8-9556ca130042', name: 'ecommerce_readme.png' },
    
    // SMART ATTENDANCE images
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/smart_attendance_system/main/screenshots/dashboard_main.png', name: 'attendance_main.png' },
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/smart_attendance_system/main/screenshots/dashboard_history.png', name: 'attendance_history.png' },
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/smart_attendance_system/main/screenshots/dashboard_users.png', name: 'attendance_users.png' },
    
    // SEBA README images
    { url: 'https://github.com/user-attachments/assets/a6d378ba-077b-45ef-baf5-fa2374a9fb8e', name: 'seba_1.png' },
    { url: 'https://github.com/user-attachments/assets/02957597-a647-4a72-aaa2-eb2fdb4fec5e', name: 'seba_2.png' },
    { url: 'https://github.com/user-attachments/assets/1ca7cd4d-e609-4b48-8de7-e168fb1fa45f', name: 'seba_3.png' },
    { url: 'https://github.com/user-attachments/assets/62924e2c-14be-4057-94b0-42f024ff4691', name: 'seba_4.png' },
    { url: 'https://github.com/user-attachments/assets/5289beb6-4a5a-423d-8821-73b2e18a1228', name: 'seba_5.png' },
    { url: 'https://github.com/user-attachments/assets/a4fd886c-3c71-498b-9a05-5bc5213af126', name: 'seba_6.png' },
    { url: 'https://github.com/user-attachments/assets/f55f7a1c-7a0c-4e0d-867b-fc2dca26f8a1', name: 'seba_7.png' },
    { url: 'https://github.com/user-attachments/assets/ba620482-e86b-45e6-bd2c-293a2ddddfea', name: 'seba_8.png' },
    
    // COVID-19 charts
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/COVID-19-data-analysis/main/output/1_line_daily_trends.png', name: 'covid_trends.png' },
    { url: 'https://raw.githubusercontent.com/Nehalkamal7/COVID-19-data-analysis/main/output/3_heatmap.png', name: 'covid_heatmap.png' },
  ];

  for (const item of images) {
    try {
      await download(item.url, item.name);
    } catch (e) {
      console.error(`Failed ${item.name}: ${e.message}`);
    }
  }
}

main();
