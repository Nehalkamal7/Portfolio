const fs = require('fs');
const readline = require('readline');

async function readConv() {
  const fileStream = fs.createReadStream('C:\\Users\\NEHAL\\.gemini\\antigravity-ide\\brain\\3e14aef5-d4c7-4298-b3d7-942803f8d355\\.system_generated\\logs\\transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream });

  for await (const line of rl) {
    try {
      const obj = JSON.parse(line);
      if (obj.type === 'USER_INPUT') {
        console.log('\n--- USER INPUT ---');
        console.log(obj.content);
      } else if (obj.tool_calls && obj.tool_calls.some(tc => tc.name === 'generate_image' || tc.name === 'browser_subagent')) {
        console.log('\n--- TOOL CALL ---');
        console.log(JSON.stringify(obj.tool_calls));
      }
    } catch(e){}
  }
}

readConv();
