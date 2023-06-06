import React, { useEffect } from "react";
import OneDisplay from "./films/OneDisplay";

import api from "../api";
import { useDispatch } from "react-redux";
import { setFilmStore } from "../features/tracker/trackerSlice";
import SearchBar from "./SearchBar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDatabaseFilms = async () => {
      const result = await api("GETFILMSALL");
      dispatch(setFilmStore(result));
    };
    getDatabaseFilms();
  }, [dispatch]);

  return (
    <main>
      <SearchBar />
      <OneDisplay />
    </main>
  );
};

export default Home;
