import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { callAPI } from "../../utils";
import {
  addApiCallResults,
  addClickedFilmId,
  addSearchTerm,
  selectSearchTerm,
} from "../../features/tracker/trackerSlice";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onClickSearchAPI = async () => {
    const result = await callAPI(searchTerm);
    dispatch(addApiCallResults(result));
  };

  const onClickResetStore = () => {
    dispatch(addApiCallResults(null));
    dispatch(addClickedFilmId(null));
    dispatch(addSearchTerm(""));
  };

  return (
    <>
      <div className="container">
        <Link to="/" onClick={onClickResetStore}>
          Home
        </Link>
        <SearchBar />
        <button type="submit" onClick={onClickSearchAPI}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AdminHeader;
