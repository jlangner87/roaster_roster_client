'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Roasters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roasters.init(
    {
      name: DataTypes.STRING,
      state: DataTypes.STRING,
      description: DataTypes.STRING,
      siteUrl: DataTypes.STRING,
      logoImg: DataTypes.STRING,
      beans: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Roasters',
      tableName: 'roasters'
    }
  )
  return Roasters
}
