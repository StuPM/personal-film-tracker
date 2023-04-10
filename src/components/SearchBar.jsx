import React from "react";
import { addSearchTerm } from "../features/tracker/trackerSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const onInput = (e) => {
    dispatch(addSearchTerm(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <form onInput={onInput} onSubmit={onSubmit}>
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search..."
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
