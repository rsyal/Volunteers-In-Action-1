'use strict';
module.exports = (sequelize, DataTypes) => {
  var Volunteer = sequelize.define('Volunteer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    contact: DataTypes.STRING,
    UserId:DataTypes.INTEGER
  }, {});
  Volunteer.associate = function(models) {
    Volunteer.belongsTo(models.Event,{ foreignKey: { allowNull: false }});
  };
  return Volunteer;
};