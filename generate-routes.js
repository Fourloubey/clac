import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = ['agence', 'projets', 'contact',
  'projets/rafael',
  'projets/lucien',
  'projets/leon',
  'projets/hippolyte',
  'projets/ulysse',
  'projets/ariette'
];

const distPath = path.join(__dirname, 'dist');
const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');

routes.forEach(route => {
  const routePath = path.join(distPath, route);
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  fs.writeFileSync(path.join(routePath, 'index.html'), template);
});

console.log('✅ Routes générées physiquement (ESM) !');
