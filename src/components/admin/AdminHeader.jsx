import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar";
import {
  addApiCallResults,
  selectSearchTerm,
} from "../../features/tracker/trackerSlice";
import api from "../../api";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onClickSearchAPI = async () => {
    const result = await api("CALLTMDBAPI", searchTerm);
    dispatch(addApiCallResults(result));
  };

  return (
    <>
      <div className="container">
        <SearchBar />
        <button type="submit" onClick={onClickSearchAPI}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AdminHeader;
