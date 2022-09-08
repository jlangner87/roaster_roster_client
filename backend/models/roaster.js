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
