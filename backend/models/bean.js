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
      Bean.belongsTo(models.Roaster, { foreignKey: 'roaster' })
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
      price: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: 'Bean',
      tableName: 'beans'
    }
  )
  return Bean
}
