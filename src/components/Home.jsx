import React, { useEffect } from "react";
import FilmDisplay from "./films/FilmDisplay";
import Header from "./Header";

import api from "../api";
import { useDispatch } from "react-redux";
import { setFilmStore } from "../features/tracker/trackerSlice";

const Home = () => {
  const dispatch = useDispatch();

  const getDatabaseFilms = async () => {
    const result = await api("GETFILMSALL");
    console.log(result);
    dispatch(setFilmStore(result));
  };

  useEffect(() => {
    getDatabaseFilms();
  }, []);

  return (
    <>
      <Header />
      <FilmDisplay />
    </>
  );
};

export default Home;
