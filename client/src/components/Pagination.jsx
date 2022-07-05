import styles from "./Pagination.module.css";
import React, { useEffect, useState } from "react";

export default function Pagination({
  coutriesPerPage,
  allCountries,
  pagination,
}) {
  const pageNumbers = [];
  let groupArrays = [];

  const [indexArray, setIndexArray] = useState(0);

  for (let i = 1; i <= Math.ceil(allCountries / coutriesPerPage); i++) {
    //cantidad de elementos totales, dividido limite de elementos por pagina
    pageNumbers.push(i);
  }

  if (pageNumbers[0]) {
    for (let i = 0; i < pageNumbers.length; i += 10) {
      groupArrays = [...groupArrays, pageNumbers.slice(i, i + 10)]; //groupArrays = [[1,2,3], [4, 5, 6], [7,8,9]]
    }
  }


  useEffect(() => {
    // console.log("si cambio de indice detecte el cambio");
  }, [indexArray]);

  const handleNextbutton = () => {
    setIndexArray((prevState) => prevState + 1);
  };

  const handleBeforeButton = () => {
    setIndexArray((prevState) => prevState - 1);
  };

  return (
    <nav className={styles.paginationNav}>
      {
        //si no está en el primer grupo de paginas no me deje devolver
        groupArrays[0] && indexArray !== 0 ? (
          <button className={styles.btnGoPages} onClick={handleBeforeButton}>
            {"< "}prev
          </button>
        ) : (
          ""
        )
      }
      <ul className={styles.paginationUl}>
        {groupArrays[0] &&
          groupArrays[indexArray].map((number) => (
            <li
              onClick={() => pagination(number)}
              key={number}
              className={styles.paginationLi}
            >
              <button type="button">{number}</button>
            </li>
          ))}
      </ul>
      {
        //si estoy en la ultima posicion de paginas no me muestre next
        groupArrays[0] && indexArray !== groupArrays.length - 1 ? (
          <button className={styles.btnGoPages} onClick={handleNextbutton}>
            next{" >"}
          </button>
        ) : (
          ""
        )
      }
    </nav>
  );
}
