'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bean extends Model {
    static associate(models) {
      Bean.belongsTo(models.Roaster, { foreignKey: 'roaster' }),
        Bean.belongsTo(models.Retailer, { foreignKey: 'retailer' })
    }
  }
  Bean.init(
    {
      name: DataTypes.STRING,
      roaster: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'roasters',
          key: 'id'
        }
      },
      origin: DataTypes.STRING,
      grind: DataTypes.STRING,
      roast: DataTypes.STRING,
      description: DataTypes.TEXT,
      organic: DataTypes.BOOLEAN,
      buy_link: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      retailer: {
        type: DataTypes.INTEGER,
        onDelete: 'NO ACTION',
        references: {
          model: 'retailers',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Bean',
      tableName: 'beans'
    }
  )
  return Bean
}
