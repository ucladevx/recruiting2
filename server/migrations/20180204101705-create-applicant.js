module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Applicants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      acceptance: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      team_name: {
        type: Sequelize.STRING
      },
      app_score: {
        type: Sequelize.INTEGER
      },
      interview_score: {
        type: Sequelize.INTEGER
      },
      application: {
        allowNull: false,
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
    });
  },
  down: (queryInterface /*, Sequelize*/) => {
    queryInterface.dropTable('Applicants');
  }
};