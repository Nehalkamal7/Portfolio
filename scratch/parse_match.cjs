const fs = require('fs');
const path = require('path');

const match = JSON.parse(fs.readFileSync(path.join(__dirname, 'showcase_match.json'), 'utf8'));

let code = '';
if (match.tool_calls) {
  for (const tc of match.tool_calls) {
    if (tc.args && tc.args.CodeContent) {
      code = tc.args.CodeContent;
      break;
    }
  }
}

if (!code) {
  console.log('CodeContent not found in tool_calls');
  process.exit(1);
}

const startMarker = 'const projects: ProjectData[] = [';
const startIdx = code.indexOf(startMarker);
const endMarker = 'const filterCategories = [';
let endIdx = code.indexOf(endMarker, startIdx);
if (endIdx === -1) {
  endIdx = code.indexOf('  const filterCategories', startIdx);
}

let arrayCode = code.substring(startIdx + startMarker.length - 1, endIdx).trim();
if (arrayCode.endsWith(';')) arrayCode = arrayCode.slice(0, -1);

const fn = new Function('return ' + arrayCode + ';');
const projects = fn();
console.log('Parsed successfully:', projects.length, 'projects!');

const formatted = projects.map(p => {
  return {
    title: p.title,
    description: p.description,
    tags: p.stack || [],
    repoUrl: p.github,
    imageUrl: p.image,
    id: p.id,
    category: p.category,
    tagline: p.tagline,
    featured: p.featured ?? true,
    architecture: p.architecture || [],
    metrics: p.metrics || [],
    stars: p.stars || 0,
    forks: p.forks || 0,
    languages: p.languages || [],
    overview: p.overview || p.description,
    problemSolved: p.problemSolved || '',
    keyFeatures: p.keyFeatures || []
  };
});

const dest = path.join(__dirname, '..', 'src', 'data', 'projects.json');
fs.writeFileSync(dest, JSON.stringify(formatted, null, 2), 'utf8');
console.log('WROTE', formatted.length, 'PROJECTS TO', dest);
