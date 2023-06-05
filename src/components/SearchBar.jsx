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
      {/* <div className="container"> */}
      <form onInput={onInput} onSubmit={onSubmit} onReset={onReset}>
        <div className="field is-horizontal">
          <div className="control">
            <input
              className="input"
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Search..."
            />
          </div>
          <div className="control">
            <button className="button" type="reset">
              X
            </button>
          </div>
        </div>
        <div className="field"></div>
      </form>
      {/* </div> */}
    </>
  );
};

export default SearchBar;
