import axios from 'axios'

export function getAllCountries() {
  return async (dispatch) => {
    const countries = await axios.get('http://localhost:3001/countries')
    return dispatch({
      type: 'GET_COUNTRIES',
      payload: countries.data,
    })
  }
}