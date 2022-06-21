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
      },
      difficulty: {
        type: DataTypes.STRING,
      },
      duration: {
        type: DataTypes.STRING,
      },
      season: {
        type: DataTypes.STRING,
      },
    },
    { timestamp: false }
  );
};
