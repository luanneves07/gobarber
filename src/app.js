import express from 'express';
import routes from './routes';

/**
 * Esta classe serve para que seja possível expor o servidor já configurado
 * com as rotas necessárias de uma maneira mais organizada.
 */
class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
