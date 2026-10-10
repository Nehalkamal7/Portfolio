const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node.js' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(data);
        } else {
          reject(new Error(`Status ${res.statusCode}: ${data}`));
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const repos = [
    'HATHEQ-PROJECT',
    'EDUvision',
    'SEBA-PROJECT',
    'smart_attendance_system',
    'ECOMMERCE-ANALYTICS',
    'COVID-19-data-analysis',
    'Nexus-OS',
    'DevGuard',
    'docugraph',
    'SchemaForge'
  ];

  for (const repo of repos) {
    console.log(`\n=================== ${repo} ===================`);
    try {
      const readme = await fetch(`https://raw.githubusercontent.com/Nehalkamal7/${repo}/main/README.md`);
      // print any lines with .png, .jpg, .jpeg, .svg, user-attachments or img
      const lines = readme.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.match(/(png|jpg|jpeg|gif|svg|user-attachments|<img|!\[)/i)) {
          console.log(`Line ${i+1}: ${line.trim()}`);
        }
      }
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }

    // Also check repo tree / files
    try {
      const treeData = await fetch(`https://api.github.com/repos/Nehalkamal7/${repo}/git/trees/main?recursive=1`);
      const tree = JSON.parse(treeData);
      if (tree.tree) {
        const images = tree.tree.filter(f => f.path.match(/\.(png|jpg|jpeg|webp|svg)$/i));
        if (images.length > 0) {
          console.log(`Found image files in repo tree:`);
          images.forEach(img => console.log(`  - ${img.path}`));
        }
      }
    } catch (e) {
      // ignore
    }
  }
}

main();
