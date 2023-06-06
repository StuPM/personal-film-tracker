import React from "react";
import { addSearchTerm } from "../features/tracker/trackerSlice";
import { useDispatch } from "react-redux";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

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
      <form
        className="searchBar m-1"
        onInput={onInput}
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <div className="field has-addons has-addons-centered is-expanded">
          <div className="control has-icons-left is-expanded">
            <input
              className="input"
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Search film title..."
            />
            <span className="icon is-small is-left">
              <Icon path={mdiMagnify} title="Search Icon" size={1.5} />
            </span>
          </div>
          <div className="control">
            <button className="button" type="reset">
              X
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
