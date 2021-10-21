import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  function handleOnSearch() {
    if (typeof onSearch === "function") {
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
    }
  }

  return (
    <div className={styles.searchBar}>
      <input placeholder="Agrega una nueva ciudad..." id="search-bar-input" />
      <button onClick={handleOnSearch}>
        <IoSearchOutline />
      </button>
    </div>
  );
}
