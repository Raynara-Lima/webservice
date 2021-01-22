'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QtdMedIngr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      QtdMedIngr.hasOne(models.Ingredientes, { foreignKey: 'id', }); 
      QtdMedIngr.hasOne(models.Medidas, { foreignKey: 'id', }); 
      QtdMedIngr.belongsTo(models.Receitas, { foreignKey: 'idReceita', onDelete: 'CASCADE' }); 

    }
  };
  QtdMedIngr.init({
    quantidade: DataTypes.FLOAT,
    idIngrediente: DataTypes.INTEGER,
    idMedida: DataTypes.INTEGER,
    idReceita: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QtdMedIngr',
  });
  return QtdMedIngr;
};