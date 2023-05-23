import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectFilmStore,
  selectSearchTerm,
} from "../../features/tracker/trackerSlice";
import FilmTile from "./FilmTile";
import "../styles/FilmDisplay.scss";
import api from "../../api";

const FilmDisplay = () => {
  const filmStore = useSelector(selectFilmStore);
  const searchTerm = useSelector(selectSearchTerm);
  const [filteredFilms, setFilteredFilms] = useState(filmStore);

  useEffect(() => {
    setFilteredFilms(
      filmStore.filter((filmStore) => filmStore.title.includes(searchTerm))
    );
  }, [filmStore, searchTerm]);

  useEffect(() => {
    async function getFilms() {
      const result = await api("GETFILMSALL");
      console.log(result);
      setFilteredFilms(result);
    }
    getFilms();
  }, []);

  if (filteredFilms.length > 0) {
    return (
      <>
        <div className="filmContainer">
          {filteredFilms.map((item) => (
            <React.Fragment key={item.id}>
              <FilmTile film={item} />
            </React.Fragment>
          ))}
        </div>
      </>
    );
  } else {
    return <p>No films match your search term.</p>;
  }
};

export default FilmDisplay;
