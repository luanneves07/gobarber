require('dotenv/config');

module.exports = {
  dialect: 'postgres', // Para utilizar este dialeto foi necessario instalar pg e pg-hstore
  host: process.env.DB_HOST, // Configuracoes do banco de dados
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // Garante as colunas createdAt e updatedAt automaticamente
    underscored: true, // Pardoniza a nemenclatura das tabelas com _ no lugar de camelCase
    underscoredAll: true,
  },
};
