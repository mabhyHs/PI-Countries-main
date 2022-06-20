/*[ ] POST /activities:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos, relacionada con los países correspondientes*/

const { Router } = require("express");
const activities = Router();
const { Activity, Country } = require("../db");

activities.post("/", async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    //creando relacion con paises
    countries.map(
      async (c) => await newActivity.setCountries(await Country.findByPk(c))
    );

    res.json(newActivity);
  } catch (err) {
    next(err);
  }
});

module.exports = { activities };
