'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Roaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roaster.init(
    {
      name: DataTypes.STRING,
      state: DataTypes.STRING,
      bio: DataTypes.STRING,
      site: DataTypes.STRING,
      logo: DataTypes.STRING,
      beans: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Roaster',
      tableName: 'roasters'
    }
  )
  return Roaster
}
