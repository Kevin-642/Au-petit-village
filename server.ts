import 'zone.js/node';
import { ngExpressApp } from '@angular/ssr';
import express from 'express';

const PORT = process.env['PORT'] || 4000;
const app = express();

ngExpressApp(app).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ SSR server listening on http://localhost:${PORT}`);
  });
});
