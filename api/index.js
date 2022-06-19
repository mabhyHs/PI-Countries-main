const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { addCountriesDB } = require("./src/routes/countries.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    addCountriesDB(); //levanta base de datos con el servidor se trae los paises de la api

    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
