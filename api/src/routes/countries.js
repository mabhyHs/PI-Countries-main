const { Router } = require("express");
const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const countries = Router();

const addCountriesDB = async () => {
  const { data } = await axios.get("https://restcountries.com/v3/all");

  let countries = data.map((country) => ({
    id: country.cca3,
    name: country.name.common,
    flag: country.flags[0],
    continent: country.region,
    capital: country.capital?.map((e) => e) || ["No tiene capital"],
    subregion: country.subregion,
    area: country.area,
    population: country.population,
  }));

  countries = Array.from(new Set(countries)).sort();//array limpio usando set
  console.log(countries);
  const countriesDB = await Country.bulkCreate(countries);
  return countriesDB;
};

countries.get('/', async (req, res) => {
  const all = await Country.findAll({ include: Activity })

  if (req.query.name) {
    let { name } = req.query
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    const found = await Country.findAll({
      where: { name: { [Op.substring]: name } },
    })
 
    return res.json(found)
  }

  res.json(all)
})

countries.get('/:id', async (req, res) => {
  const one = await Country.findByPk(req.params.id.toUpperCase(), {
    include: Activity,
  })
  if (!one) {
    return res.status(404).send('Error: country not found')
  }
  console.log(one)
  return res.json(one)
})

module.exports = { addCountriesDB, countries };
