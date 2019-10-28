import Sequelize from 'sequelize';

import User from '../app/models/User';
import databaseConfig from '../config/database';

/* Este campo é utilizado para guardar os models utilizados dentro do banco de dados */
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  /**
   * Cria uma conexão com o banco de dados e realiza o método init de todos os
   * models cadastrados
   */
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();