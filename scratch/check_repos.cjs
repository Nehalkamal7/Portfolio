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
  try {
    const reposData = await fetch('https://api.github.com/users/Nehalkamal7/repos?per_page=100');
    const repos = JSON.parse(reposData);
    console.log(`Found ${repos.length} repos for Nehalkamal7:`);
    
    for (const r of repos) {
      console.log(`\n========================================`);
      console.log(`Repo: ${r.name} (default branch: ${r.default_branch})`);
      console.log(`Description: ${r.description}`);
      console.log(`URL: ${r.html_url}`);
      
      // Try to fetch README
      try {
        const readme = await fetch(`https://raw.githubusercontent.com/Nehalkamal7/${r.name}/${r.default_branch}/README.md`);
        console.log(`README size: ${readme.length} chars`);
        
        // Find markdown images ![alt](url)
        const mdImageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
        let match;
        while ((match = mdImageRegex.exec(readme)) !== null) {
          console.log(`  [MD Image] alt: "${match[1]}" -> url: "${match[2]}"`);
        }

        // Find html images <img ... src="..." ...>
        const htmlImageRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
        while ((match = htmlImageRegex.exec(readme)) !== null) {
          console.log(`  [HTML Image] src: "${match[1]}"`);
        }
      } catch (err) {
        console.log(`  No README found (${err.message.split('\n')[0]})`);
      }
    }
  } catch (err) {
    console.error('Error fetching repos:', err);
  }
}

main();
