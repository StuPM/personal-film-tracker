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
      <section className="columns is-vcentered is-mobile m-0">
        <div className="column">
          <SearchBar />
        </div>
        <div className="column is-narrow">
          <YearPanel />
        </div>
      </section>
      <OneDisplay />
    </main>
  );
};

export default Home;
