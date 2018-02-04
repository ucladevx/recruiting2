'use strict';
module.exports = (sequelize, DataTypes) => {
  const Applicant = sequelize.define('Applicant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    acceptance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_name: {
      type: DataTypes.STRING,
    },
    app_score: {
      type: DataTypes.INTEGER,
    },
    interview_score: {
      type: DataTypes.INTEGER,
    },
    application: {
      type: DataTypes.STRING,   // currently stored as a string, should prob create model for application after
      allowNull: false,
    }
  });
 
 Applicant.associate = (models) => {
    /*
    class method associations go here
    i.e.
    Applicant.hasSubmitted(models.Application, {
      ...
    });
    */
  return Applicant;
};