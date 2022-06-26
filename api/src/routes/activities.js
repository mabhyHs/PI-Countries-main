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

// ruta get para obtener todas las actividades
activities.get("/", async (req, res, next) => {
  try {
    const activities = await Activity.findAll({
      include: [{ model: Country }],
    });
    res.json(activities);
  } catch (err) {
    next(err);
  }
}
);

//ruta delete para eliminar una actividad
activities.delete("/:id", async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id);
    await activity.destroy();
    res.json(activity);
  } catch (err) {
    next(err);
  }
}
);

//ruta put para actualizar una actividad
activities.put("/:id", async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id);
    const { name, difficulty, duration, season, countries } = req.body;
    await activity.update({
      name,
      difficulty,
      duration,
      season,
    });
    //creando relacion con paises
    countries.map(
      async (c) => await activity.setCountries(await Country.findByPk(c))
    );
    res.json(activity);
  } catch (err) {
    next(err);
  }
}
);



module.exports = { activities };
