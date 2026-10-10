const fs = require('fs');
const path = require('path');

const line = fs.readFileSync(path.join(__dirname, 'extracted_line.txt'), 'utf8');

// Parse JSONLine
let lineData;
try {
  lineData = JSON.parse(line);
} catch (e) {
  // if not direct json, look inside
}

let contentStr = '';
if (lineData && lineData.content) {
  contentStr = lineData.content;
} else if (lineData && lineData.tool_calls) {
  contentStr = JSON.stringify(lineData.tool_calls);
} else {
  contentStr = line;
}

const startMarker = 'const projects: ProjectData[] = [';
const startIdx = contentStr.indexOf(startMarker);
if (startIdx === -1) {
  console.log('Marker not found in content');
  process.exit(1);
}

const endMarker = 'const filterCategories = [';
let endIdx = contentStr.indexOf(endMarker, startIdx);
if (endIdx === -1) {
  endIdx = contentStr.indexOf('  const filterCategories', startIdx);
}

let rawArrayCode = contentStr.substring(startIdx + startMarker.length - 1, endIdx).trim();
if (rawArrayCode.endsWith(';')) rawArrayCode = rawArrayCode.slice(0, -1);

try {
  const fn = new Function('return ' + rawArrayCode + ';');
  const projects = fn();
  console.log('Successfully extracted', projects.length, 'projects!');

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
  console.log('Saved', formatted.length, 'projects to src/data/projects.json');
} catch (err) {
  console.error('Eval error:', err.message);
  fs.writeFileSync(path.join(__dirname, 'raw_code.txt'), rawArrayCode, 'utf8');
  console.log('Wrote raw_code.txt for inspection');
}
