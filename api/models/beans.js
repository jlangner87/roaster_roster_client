'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Beans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Beans.init(
    {
      name: DataTypes.STRING,
      origin: DataTypes.STRING,
      beanType: DataTypes.STRING,
      organic: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      roaster: DataTypes.STRING,
      purchaseUrl: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Beans',
      tableName: 'beans'
    }
  )
  return Beans
}
