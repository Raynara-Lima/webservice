'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receitas.hasMany(models.QtdMedIngr, { foreignKey: 'idReceita'}); 
    }
  };
  Receitas.init({
    idQtdMedIngr: DataTypes.INTEGER,
    tempo: DataTypes.FLOAT
  }, {
    sequelize,

    modelName: 'Receitas',
  });
  return Receitas;
};