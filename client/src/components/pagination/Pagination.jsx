import styles from "./Pagination.module.css";

export default function Pagination({
  countriesPerPage,
  allCountries,
  pagination,
  currentPage,
}) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    //cantidad de elementos totales, dividido limite de elementos por pagina
    pageNumbers.push(i);
  }

  if (currentPage === 1) {
    pageNumbers = pageNumbers.slice(currentPage - 1, currentPage + 1);
  }
  
  if (
    currentPage > 1 && 
    currentPage < Math.ceil(allCountries / countriesPerPage)
  ) {
    pageNumbers = pageNumbers.slice(currentPage - 2, currentPage + 1);
  }
  
  if (currentPage === Math.ceil(allCountries / countriesPerPage)) {
    pageNumbers = pageNumbers.slice(currentPage - 2, currentPage);
  }
  
  return (
    <nav className={styles.paginationNav}>
      {currentPage > 1 ? (
        <button
          className={styles.btnGoPages}
          onClick={() => pagination("first")}
        >
          First
        </button>
      ) : (
        ""
      )}
      {currentPage > 1 ? (
      <button className={styles.arrrowBtn} onClick={() => pagination("prev")}>
        {" "}
        &#x2039;
      </button>
        ) : (
          ""
        )}

      <ul className={styles.paginationUl}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li
              onClick={() => pagination(number)}
              key={number}
              className={styles.paginationLi}
            >
              <button type="button">{number}</button>
            </li>
          ))}
      </ul>
      {/* aparecer y desaparecer btn según página */}
      {currentPage !== Math.ceil(allCountries / countriesPerPage) ? ( //si la página actual es la última página no se muestra el botón
      <button className={styles.arrrowBtn} onClick={() => pagination("next")}>
        &#8250;
      </button>
      ) : (
        ""
      )}
      {currentPage !== Math.ceil(allCountries / countriesPerPage) ? (
        <button
          className={styles.btnGoPages}
          onClick={() => pagination("last")}
        >
          last
        </button>
      ) : (
        ""
      )}
    </nav>
  );
}
