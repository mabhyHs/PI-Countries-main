/*Model Actividad Turística con las siguientes propiedades:
- ID
- Nombre
- Dificultad (Entre 1 y 5)
- Duración
- Temporada (Verano, Otoño, Invierno o Primavera)*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      season: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamp: false }
  );
};
