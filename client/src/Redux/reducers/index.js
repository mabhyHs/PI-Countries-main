import { GET_COUNTRIES,GET_ACTIVITIES, GET_COUNTRIES_BY_NAME,GET_COUNTRY_DETAILS,FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, FILTER_BY_ACTIVITY_NAME,SORT ,CREATE_ACTIVITY } from '../constTypes.js'
const initialState = {
  countries: [],
  allCountries: [],
  allActivities: [],
  countryDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case FILTER_BY_CONTINENT:
      const filteredByCntnt =
        action.payload === "All"
          ? state.allCountries
          : state.allCountries.filter((c) => c.continent === action.payload);
      return {
        ...state,
        countries: filteredByCntnt,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
      };
    case FILTER_BY_ACTIVITY:
      const filtered =
        action.payload === "All"
          ? state.allCountries
          : state.allCountries.filter(
              (c) =>
                c.activities &&
                c.activities.filter((act) => act.season === action.payload)
                  .length
            );
      return {
        ...state,
        countries: filtered,
      };
    case FILTER_BY_ACTIVITY_NAME:
      const filteredByName =
        action.payload === "All"
          ? state.allCountries
          : state.allCountries.filter(
              (c) =>
                c.activities &&
                c.activities.filter((act) => act.name === action.payload).length
            );
      return {
        ...state,
        countries: filteredByName,
      };
    case SORT:
      var sorted;
      if (action.payload.length === 2) {
        sorted =
          action.payload === "AZ"
            ? state.countries.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
              })
            : state.countries.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
              });
      } else {
        sorted =
          action.payload === "populationAsc"
            ? state.countries.sort((a, b) => a.population - b.population)
            : state.countries.sort((a, b) => b.population - a.population);
      }
      return {
        ...state,
        countries: sorted,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
      };
    case GET_COUNTRY_DETAILS:
      return {
        ...state,
        countryDetail: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
