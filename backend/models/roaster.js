'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Roaster extends Model {
    static associate(models) {
      Roaster.hasMany(models.Bean, { foreignKey: 'roaster' })
    }
  }
  Roaster.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      bio: DataTypes.TEXT,
      wesite: DataTypes.STRING,
      logo: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Roaster',
      tableName: 'roasters'
    }
  )
  return Roaster
}
