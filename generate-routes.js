const fs = require('fs');
const path = require('path');

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
  // On copie l'index.html dans chaque dossier
  fs.writeFileSync(path.join(routePath, 'index.html'), template);
});

console.log('Routes générées physiquement pour le SEO !');
