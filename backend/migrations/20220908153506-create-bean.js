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
      roaster: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'roasters',
          key: 'id'
        }
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
        type: Sequelize.TEXT
      },
      organic: {
        type: Sequelize.BOOLEAN
      },
      buy_link: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      retailer: {
        type: Sequelize.INTEGER,
        onDelete: 'NO ACTION',
        references: {
          model: 'retailers',
          key: 'id'
        }
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
