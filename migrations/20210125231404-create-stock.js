'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING
      },
      currentValue: {
        type: Sequelize.INTEGER
      },
      closingValue: {
        type: Sequelize.INTEGER
      },
      threeMonthValue: {
        type: Sequelize.INTEGER
      },
      sixMonthValue: {
        type: Sequelize.INTEGER
      },
      oneYearValue: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stocks');
  }
};