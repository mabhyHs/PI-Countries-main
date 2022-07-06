import axios from 'axios'
import { GET_COUNTRIES,GET_ACTIVITIES, GET_COUNTRIES_BY_NAME,GET_COUNTRY_DETAILS,FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, FILTER_BY_ACTIVITY_NAME,SORT ,CREATE_ACTIVITY } from './actionTypes.js'
const  URL='http://localhost:3001';


export function getAllCountries() {
  return async (dispatch) => {
    const countries = await axios.get(`${URL}/countries`)
    return dispatch({
      type: GET_COUNTRIES,
      payload: countries.data,
    })
  }
}

export function getAllActivities() {
  return async (dispatch) => {
    const activities = await axios.get(`${URL}/activities`)
    return dispatch({
      type: GET_ACTIVITIES,
      payload: activities.data,
    })
  }
}

export function getCountriesByName(name) {
  return async (dispatch) => {
    try {
      const countriesByName = await axios.get(
        `${URL}/countries?name=${name}`
      )
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: countriesByName.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getCountryDetails(id) {
  return async (dispatch) => {
    try {
      const details = await axios.get(`${URL}/countries/${id}`)
      return dispatch({
        type: GET_COUNTRY_DETAILS,
        payload: details.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function filterByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  }
}

export function filterByActivity(payload) {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  }
}


export function filterByActivityName(payload) {
  return {
    type: FILTER_BY_ACTIVITY_NAME,
    payload,
  }
}

export function sort(payload) {
  return {
    type: SORT,
    payload,
  }
}

export function createActivity(details) {
  return async (dispatch) => {
    try {
      const activity = await axios.post(`${URL}/activities`, details)
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: activity.data,
      })
    } catch (error) {
      console.log(error)
    }
  }

}
