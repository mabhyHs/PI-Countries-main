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

activities.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const activityToDelete = await Activity.findOne({
      where: {
        id: id,
      },
    });

    if (!activityToDelete) {
      return res.status(404).send("Activity not found");
    }
    await activityToDelete.destroy();
    res.send("Activity deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});


//ruta delete para eliminar una actividad
/*activities.delete("/:id", async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id);
    await activity.destroy();
    res.json(activity);
  } catch (err) {
    next(err);
  }
}
);*/





module.exports = { activities };
