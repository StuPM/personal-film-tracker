import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { callAPI } from "../../utils";
import {
  addApiCallResults,
  selectSearchTerm,
} from "../../features/tracker/trackerSlice";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onClick = async () => {
    const result = await callAPI(searchTerm);
    dispatch(addApiCallResults(result));
  };

  return (
    <>
      <div className="container">
        <Link to="/">Home</Link>
        <SearchBar />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AdminHeader;
