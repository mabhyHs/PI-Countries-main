import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterByContinent,
  filterByActivity,
  filterByActivityName,
  sort,
} from "../../Redux/actions";
import styles from "./Home.module.css";
import { Country } from "../country/Country";
import Pagination from "../pagination/Pagination";
import Navbar from "../../components/navbar/Navbar";
import Loading from "../loading/Loading";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  // eslint-disable-next-line no-unused-vars
  const [update, setUpdate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const lastIndex = currentPage * countriesPerPage; //2 * 10 = 20 **  2 * 10 -1 = 19
  const firstIndex = lastIndex - countriesPerPage; //20 - 10= 10  ** 20 - 10 -1 = 9
  //si la pagina actual es 1 muestre los primeros nueve paises, si no muestre los siguientes 10
  let currentCountries;
  currentPage === 1
    ? (currentCountries = countries.slice(0, 9))
    : (currentCountries = countries.slice(firstIndex - 1, lastIndex - 1)); //slice(9, 19) = 9, 10, 11,...18

  const pagination = (pageNumber) => {
    let page = currentPage;
    if (pageNumber === "first") {
      setCurrentPage(1);
    } else if (pageNumber === "last") {
      setCurrentPage(Math.ceil(countries.length / countriesPerPage));
    } else if (
      pageNumber === "next" &&
      currentPage < Math.ceil(countries.length / countriesPerPage)
    ) {
      page = currentPage + 1;
      setCurrentPage(page);
    } else if (pageNumber === "prev" && currentPage > 1) {
      page = currentPage - 1;
      setCurrentPage(page);
    } else if (typeof pageNumber === "number") {
      setCurrentPage(pageNumber);
    }
  };

  //al cambiar el contenido del arreglo countries se establezca que inicie en la primer pagina
  useEffect(() => {
    setCurrentPage(1);
  }, [countries]);

  //filtro por continente
  function handleContinentFilter(e) {
    dispatch(filterByContinent(e.target.value));
    setUpdate(e.target.value);
  }

  //filtro por actividad
  function handleActivityFilter(e) {
    dispatch(filterByActivity(e.target.value));
    setUpdate(e.target.value);
  }

  //filtro por nombre de actividad
  function handleActivityFilterByName(e) {
    dispatch(filterByActivityName(e.target.value));
    setUpdate(e.target.value);
  }

  //ordenar por nombre o poblacion
  function handleSort(e) {
    e.preventDefault();
    dispatch(sort(e.target.value));
    setUpdate(e.target.value);
  }

  return (
    <div className={styles.container}>
      <Navbar
        sort={handleSort}
        contFilter={handleContinentFilter}
        actFilter={handleActivityFilter}
        actNameFilter={handleActivityFilterByName}
      />
        <Pagination
        currentPage={currentPage}
        countriesPerPage={countriesPerPage}
        allCountries={countries.length}
        pagination={pagination}
      />
      <div className={styles.countryContainer}>
        {currentCountries.length ? (
          currentCountries?.map((c) => (
            <Country
              name={c.name}
              flag={c.flag}
              id={c.id}
              key={c.id}
              continent={c.continent}
            />
          ))
        ) : (
          <Loading text={"No countries found. Please try again or press Reload Countries"} />
        )}
      </div>
    </div>
  );
}
