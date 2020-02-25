module.exports = function (sequelize, Datatypes){

  // As a best practice, the definition you give to the model (in quotes below) should be the same as the model name. Sequelize derives the table name by lowercasing and pluralizing whatever you put here.

  // Newer versions of sequalize use TINYINT instead of Boolean values, hence using TINYINT(1) below.

  var Burger = sequelize.define("Burger", {
    name: Datatypes.STRING,
    eaten: {
      type: Datatypes.BOOLEAN,
      default: 0
    }
  });
  return Burger;
}
