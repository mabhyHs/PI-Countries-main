/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, Activity, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id:"ARG",
  name: "Argentina",
  flag: "https://restcountries.eu/data/arg.svg",
  continent: "South America",
  capital: "Buenos Aires",
  subregion: "South America",
  area: 2780400,
  population: 44271000,
  activities: [
    {
      id: 1,
      name: "Tennis",
      difficulty: 2,
      duration: "1 hour",
      season: "Summer",
    },
    {
      id: 2,
      name: "Swimming",
      difficulty: 3,
      duration: "1 hour",
      season: "Summer",
    }]
};

const activity = {
  id: 1,
  name: "Tennis",
  difficulty: 2,
  duration: "1 hour",
  season: "Summer",
};



describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
  describe('GET /countries/:id', () => {
    it('should get 200', () =>
      agent.get('/countries/ARG').expect(200)
    );
  }
  );

});



describe('Activities routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Activity.sync({ force: true })
    .then(() => Activity.create(activity)));

  describe('GET /activities', () => {
    it('should get 200', () =>
      agent.get('/activities').expect(200)
    );
  }
  );

});



