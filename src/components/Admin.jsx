import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addFilm } from "../features/tracker/trackerSlice";

const Admin = () => {
  const [searchInput, setSearchInput] = useState({});
  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();

  const onInput = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    callAPI();
  };

  const callAPI = async () => {
    const encodedSearchInput = encodeURI(searchInput);

    console.log();

    const results = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${encodedSearchInput}&page=1&include_adult=false`
    );

    setApiData(results.data.results);
    console.log(results.data.results);
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
          <button type="submit">Submit</button>
        </form>
      </div>
      {apiData.map((item) => (
        <>
          <p key={item.id}>{item.title}</p>
          <button
            onClick={() => {
              dispatch(addFilm(item));
            }}
          >
            Add
          </button>
        </>
      ))}
    </>
  );
};

export default Admin;
