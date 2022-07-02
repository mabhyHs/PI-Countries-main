import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../actions";
import styles from "./Searchbar.module.css";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function handleChange(e) {
    e.preventDefault();
    //El estado local 'value' controla el formulario
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getCountriesByName(value));
    setValue("");
  }

  return (
    <div className={styles.container}>
      <input
        autocomplete="off"
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder="Search countries..."
      />
      <button
        className={styles.button}
        onClick={(e) => handleSubmit(e)}
        type="submit"
      >
        <i className="fa fa-fw fa-search"></i>
      </button>
    </div>
  );
}
