'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('beans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      grind: {
        type: Sequelize.STRING
      },
      roast: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      purchaceLink: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      organic: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('beans')
  }
}
