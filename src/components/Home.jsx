import React, { useEffect } from "react";
import FilmDisplay from "./films/FilmDisplay";

import api from "../api";
import { useDispatch } from "react-redux";
import { setFilmStore } from "../features/tracker/trackerSlice";
import SearchBar from "./SearchBar";

const Home = () => {
  const dispatch = useDispatch();

  const getDatabaseFilms = async () => {
    const result = await api("GETFILMSALL");
    dispatch(setFilmStore(result));
  };

  useEffect(() => {
    getDatabaseFilms();
  }, []);

  return (
    <main>
      <SearchBar />
      <FilmDisplay />
    </main>
  );
};

export default Home;
