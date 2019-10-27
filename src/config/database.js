module.exports = {
  // Para utilizar este dialeto foi necessario instalar pg e pg-hstore
  dialect: 'postgres',
  // Configuracoes do banco de dados
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  databse: 'gobarber',
  // Define algumas funcoes que o banco de dados vai utilizar por default
  define: {
    timestamps: true,
    // Pardoniza a nemenclatura das tabelas com _ no lugar de camelCase
    underscored: true,
    underscoredAll: true,
  },
};
