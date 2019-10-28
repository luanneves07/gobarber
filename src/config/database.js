module.exports = {
  dialect: 'postgres', // Para utilizar este dialeto foi necessario instalar pg e pg-hstore
  host: 'localhost', // Configuracoes do banco de dados
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // Garante as colunas createdAt e updatedAt automaticamente
    underscored: true, // Pardoniza a nemenclatura das tabelas com _ no lugar de camelCase
    underscoredAll: true,
  },
};
