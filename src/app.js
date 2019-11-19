import express from 'express';
import path from 'path';
import * as Sentry from '@sentry/node';
import 'express-async-errors';
import routes from './routes';
import sentryconfig from './config/sentry';

import './databse';

/**
 * Esta classe serve para que seja possível expor o servidor já configurado
 * com as rotas necessárias de uma maneira mais organizada.
 */
class App {
  constructor() {
    this.server = express();
    Sentry.init(sentryconfig);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
