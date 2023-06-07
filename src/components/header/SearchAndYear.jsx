import React from "react";
import SearchBar from "./SearchBar";
import YearSelector from "./YearSelector";

const SearchAndYear = () => {
  return (
    <section className="columns is-vcentered is-mobile m-0 p-0">
      <div className="column ">
        <SearchBar />
      </div>
      <div className="column is-narrow">
        <YearSelector />
      </div>
    </section>
  );
};

export default SearchAndYear;
