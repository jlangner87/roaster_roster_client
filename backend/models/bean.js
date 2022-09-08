'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bean extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bean.init(
    {
      name: DataTypes.STRING,
      origin: DataTypes.STRING,
      grind: DataTypes.STRING,
      roast: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      purchaceLink: DataTypes.STRING,
      img: DataTypes.STRING,
      organic: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Bean',
      tableName: 'beans'
    }
  )
  return Bean
}
