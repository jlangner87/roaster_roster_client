'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Retailer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Retailer.hasMany(models.Bean, { foreignKey: 'retailer' })
    }
  }
  Retailer.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      logo: DataTypes.STRING,
      website: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Retailer',
      tableName: 'retailers'
    }
  )
  return Retailer
}
