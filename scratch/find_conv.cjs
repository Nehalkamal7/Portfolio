const fs = require('fs');
const path = require('path');
const brainDir = 'C:\\Users\\NEHAL\\.gemini\\antigravity-ide\\brain';
const dirs = fs.readdirSync(brainDir);
for (const d of dirs) {
  const log = path.join(brainDir, d, '.system_generated', 'logs', 'transcript.jsonl');
  if (fs.existsSync(log)) {
    const stat = fs.statSync(log);
    const content = fs.readFileSync(log, 'utf8');
    if (content.includes('public/projects') || content.includes('hatheq.jpg') || content.includes('generate_image') || content.includes('hatheq-dashboard')) {
      console.log('Matched conv:', d, 'modified:', stat.mtime);
    }
  }
}
