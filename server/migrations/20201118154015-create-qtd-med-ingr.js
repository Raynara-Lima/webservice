'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('QtdMedIngrs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.FLOAT
      },
      idReceita: {
        type: Sequelize.INTEGER,


      },
      idIngrediente: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE', 
        references: { model: 'Ingredientes', key: 'id', as: 'idIngrediente', }
      },
      idMedida: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE', 
        references: { model: 'Medidas', key: 'id', as: 'idMedida', }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('QtdMedIngrs');
  }
};