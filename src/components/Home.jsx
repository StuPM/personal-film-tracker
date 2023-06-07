import React, { useEffect } from "react";
import OneDisplay from "./films/OneDisplay";

import api from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  selectClickedYear,
  setFilmStore,
} from "../features/tracker/trackerSlice";
import SearchBar from "./SearchBar";
import YearPanel from "./misc/YearPanel";

const Home = () => {
  const dispatch = useDispatch();
  const clickedYear = useSelector(selectClickedYear);

  useEffect(() => {
    const getDatabaseFilms = async () => {
      const result = await api("GETFILMSALL", { year: clickedYear });
      dispatch(setFilmStore(result));
    };
    getDatabaseFilms();
  }, [clickedYear, dispatch]);

  return (
    <main>
      <SearchBar />
      <YearPanel />
      <OneDisplay />
    </main>
  );
};

export default Home;
