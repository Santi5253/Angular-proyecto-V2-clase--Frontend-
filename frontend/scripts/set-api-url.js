const fs = require('fs');
const url = process.env.API_URL;
if (!url) { console.log('API_URL no definida: se usa localhost.'); process.exit(0); }
const base = url.replace(/\/+$/, '').replace(/\/api\/v1$/, '') + '/api/v1';
fs.writeFileSync(__dirname + '/../src/app/api-url.ts', `export const API_URL = '${base}';\n`);
console.log('API_URL =', base);
