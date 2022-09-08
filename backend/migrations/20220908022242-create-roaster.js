'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      site: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      beans: {
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
    await queryInterface.dropTable('roasters')
  }
}
