'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Retailer extends Model {
    static associate(models) {
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
