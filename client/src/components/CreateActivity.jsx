import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllCountries, createActivity, getAllActivities } from "../actions";
import Swal from "sweetalert2";
import styles from "./CreateActivity.module.css";
import headerNav from "../img/iconDark.png";

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory(); //para redireccionar luego de cargar una nueva actividad
  const countries = useSelector((state) => state.allCountries);
  const allActivities = useSelector((state) => state.allActivities);

  const [formValues, setFormValues] = useState({
    name: "",
    difficulty: "DEFAULT",
    duration: "DEFAULT",
    season: "DEFAULT",
    countries: [],
  });

  const [errors, setErrors] = useState({});

  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);


  // ---- funcion para manejo de errores-----

  function validate(activity) {
    let errors = {}; //seteo objeto vacio para los errores
    if (activity.name === "") errors.name = "A name is required";
    if (/^\s/.test(activity.name)) errors.name = "Not allow";
    if (/[`~,.<>;':"/[\]|{}()=_+-?¡!¿*{}´´¨´&%$#°]/.test(activity.name))
      errors.name = "Name not allowed especials characters or numbers";
    if (activity.difficulty === "DEFAULT")
      errors.difficulty = "You must select a difficulty";
    if (activity.duration === "DEFAULT")
      errors.duration = "You must select a duration";
    if (activity.season === "DEFAULT")
      errors.season = "You must select a seasson";
    if (activity.countries.length === "")
      errors.countries = "You must select at least one country";
    return errors;
  }
  // -------------------------------

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...formValues,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    setFormValues({
      ...formValues,
      countries: [...formValues.countries, e.target.value],
    });
  }

  //eliminar país de actividad
  const handleDelete = (countryDelete) => {
    setFormValues({
      ...formValues,
      countries: formValues.countries.filter(
        (count) => count !== countryDelete
      ),
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      if (formValues.countries === 0)
        return setErrors({ ...errors, countries: "You must select a country" });
      if (allActivities.find((act) => act.name === formValues.name))
        return setErrors({ ...errors, name: "This activity already exist" });
      else {
        dispatch(createActivity(formValues));
        setFormValues({
          name: "",
          difficulty: "DEFAULT",
          duration: "DEFAULT",
          season: "DEFAULT",
          countries: [],
        });
        Swal.fire({
          icon: "success",
          title: "The activity was created successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        history.push("./countries");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          alt="Henry countries tittle"
          src={headerNav}
          className={styles.headerImg}
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h4 className={styles.title}>Add Touristic Activity</h4>
          <div className={styles.formSection}>
            <label htmlFor="name">Name:</label>
            <input
              autocomplete="off"
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              className={styles.input}
              onChange={(e) => handleChange(e)}
              required
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor="duration">
              Duration:
            </label>
            <select
              name="duration"
              id="duration"
              value={formValues.duration}
              className={styles.input}
              onChange={(e) => handleChange(e)}
            >
              <option value="DEFAULT" disabled defaultValue selected>
                Hours...
              </option>
              {hours.map((h) => {
                return (
                  <option key={h} value={h}>
                    {h}
                  </option>
                );
              })}
            </select>
            {errors.duration && <p>{errors.difficulty}</p>}
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor="difficulty">
              Difficulty:
            </label>
            <select
              id="difficulty"
              name="difficulty"
              value={formValues.difficulty}
              className={styles.input}
              onChange={(e) => handleChange(e)}
            >
              <option value="DEFAULT">Difficulty...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.difficulty && <p>{errors.difficulty}</p>}
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor="season">
              Season:
            </label>
            <select
              className={styles.input}
              id="season"
              name="season"
              value={formValues.season}
              onChange={(e) => handleChange(e)}
            >
              <option value="DEFAULT">Season...</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
            {errors.season && <p>{errors.season}</p>}
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor="country">
              Country:
            </label>
            <select
              className={styles.input}
              name="countries"
              value={formValues.countries}
              onChange={(e) => handleSelect(e)}
            >
              <option value="">Countries...</option>
              {countries.map((c) => (
                <option value={c.id}>{c.name}</option>
              ))}
            </select>
            {errors.countries && <p>{errors.countries}</p>}
          </div>

          <div className={styles.countriesSelected}>
            <div className={styles.title_countries}>
              <h4>Countries:</h4>
            </div>
            <ul className={styles.ul_element}>
              {formValues.countries.map((el) => (
                <li key={el} onClick={() => handleDelete(el)}>
                  <p>{el}</p>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/countries">
            <button className={styles.btnBack}>Go back</button>
          </Link>
          <button className={styles.btn} type="submit">
            Add Activity
          </button>
        </form>
      </div>
    </div>
  );
}
