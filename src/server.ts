import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from '../src/app/app.server.module'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
declare var __dirname;
    
    const PORT = 5000;
   //var join = path();
    enableProdMode();

    const app = express();

    let template = readFileSync(join(__dirname, '..', 'src', 'index.html')).toString();

    app.engine('html', (_, options, callback) => {
      const opts = { document: template, url: options.req.url };
      // renderModuleFactory(AppServerModuleFactory, opts)
      // .then(html => callback(null, html));
      app.engine('html', ngExpressEngine({
        bootstrap: AppServerModule // Give it a module to bootstrap
      }));
    });

    app.set('view engine', 'html');
    app.set('views', 'src')

    app.get('*.*', express.static(join(__dirname, '..', 'src')));

    app.get('*', (req, res) => {
      //res.render('index', { req });
      console.log('i got here');
      res.send('Hello World');
    });

    app.listen(PORT, () => {
      console.log(`listening on http://localhost:${PORT}!`);
    });