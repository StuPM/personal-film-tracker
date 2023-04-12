import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  addFilm,
  addClickedFilmId,
  selectClickedFilmId,
} from "../../features/tracker/trackerSlice";
import { Link } from "react-router-dom";
import AdminFilmDetails from "./AdminFilmDetails";

const Admin = () => {
  const [searchInput, setSearchInput] = useState({});
  const [apiData, setApiData] = useState([]);
  const clickedFilmId = useSelector(selectClickedFilmId);

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

  const onClick = (film) => {
    dispatch(addClickedFilmId(film.id));
    console.log(film.id);
  };

  return (
    <>
      <div className="container">
        <Link to="/">Home</Link>
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
      <div className="filmContainer">
        {apiData.map((item) => (
          <React.Fragment key={item.id}>
            <div
              className="filmTile"
              onClick={() => {
                onClick(item);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                alt=""
              />
              {clickedFilmId === item.id && <AdminFilmDetails film={item} />}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Admin;
