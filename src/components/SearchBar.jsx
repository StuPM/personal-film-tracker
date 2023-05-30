import React from "react";
import { addSearchTerm } from "../features/tracker/trackerSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const onInput = (e) => {
    dispatch(addSearchTerm(e.target.value.toLowerCase()));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onReset = () => {
    dispatch(addSearchTerm(""));
  };

  return (
    <>
      <div className="container">
        <form onInput={onInput} onSubmit={onSubmit} onReset={onReset}>
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search..."
          />
          <button type="reset">X</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
