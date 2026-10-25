/* Standalone preview builder, no React bundler required.
   Uses TypeScript to compile JSX and a minimal require registry to bundle local modules.
   Run with `npm run preview:offline-build` after npm install. */
const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const root = path.resolve(__dirname,'..');
const src = path.join(root,'src');
const dest = path.join(root,'preview');
const sources = ['./data.js','./InnerPages.jsx','./App.jsx'];
const transpiled = sources.map((name) => {
  const code = fs.readFileSync(path.join(src,name.slice(2)),'utf8');
  const result = ts.transpileModule(code, {
    fileName:name,
    reportDiagnostics:true,
    compilerOptions:{jsx:ts.JsxEmit.React,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true},
  });
  if (result.diagnostics.some(d=>d.category===ts.DiagnosticCategory.Error)) {
    throw new Error(name+': '+result.diagnostics.map(d=>ts.flattenDiagnosticMessageText(d.messageText,' ')).join('; '));
  }
  return [name, result.outputText];
});
let output = `/* Generated Elearna CDN preview. React and ReactDOM must be loaded by preview/index.html. */\n(function(){\n'use strict';\nconst registry = Object.create(null), cache = Object.create(null);\nfunction load(id){if(id==='react')return window.React; if(id==='react-dom/client')return {createRoot:window.ReactDOM.createRoot};if(id.endsWith('.css'))return {};if(cache[id])return cache[id].exports;const f=registry[id];if(!f)throw new Error('Unknown module: '+id);const module={exports:{}};cache[id]=module;f(module,module.exports,load);return module.exports;}\n`;
for (const [name, code] of transpiled) {
  output += `registry[${JSON.stringify(name)}]=function(module,exports,require){\n${code}\n};\n`;
}
output += `const Root=load('./App.jsx').default;window.ReactDOM.createRoot(document.getElementById('root')).render(window.React.createElement(Root));\n})();`;
// Normalizes CommonJS local module IDs used by TS transpilation.
output=output.replaceAll('require("./data")', 'require("./data.js")')
             .replaceAll('require("./InnerPages.jsx")','require("./InnerPages.jsx")');
fs.mkdirSync(dest,{recursive:true});
fs.writeFileSync(path.join(dest,'bundle.js'),output);
fs.writeFileSync(path.join(dest,'styles.css'),fs.readFileSync(path.join(src,'styles.css'),'utf8')+'\n'+fs.readFileSync(path.join(src,'inner-pages.css'),'utf8'));
fs.writeFileSync(path.join(dest,'index.html'),`<!doctype html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Elearna React • 10-page reference recreation</title><link rel="preconnect" href="https://cdn.prod.website-files.com"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/><link rel="stylesheet" href="./styles.css"/></head><body><div id="root"></div><script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script><script src="./bundle.js"></script></body></html>`);
console.log('Built preview/bundle.js and preview/styles.css ('+output.length+' JS characters)');
