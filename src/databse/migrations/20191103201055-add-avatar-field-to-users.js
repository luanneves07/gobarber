/**
 * Esta migration adiciona uma nova coluna dentro da tabela de usuarios
 * Criando uma referencia para a imagem do avatar
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Este metodo deve receber:
     * 1. Nome da tabela que será alterada
     * 2. Nome da coluna que será adicionada
     * 3. Opções:
     *  3.1 Tipo da nova coluna
     *  3.2 References (Foreign Key)
     *    3.2.1 Nome da tabela que será referenciada
     *    3.2.2 Chave que será referenciada na tabela em questão para a nova coluna adicionada
     * 4. OnUpdate
     * 5. OnDelete
     */
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
