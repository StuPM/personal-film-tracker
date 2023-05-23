import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectFilmStore,
  selectSearchTerm,
} from "../../features/tracker/trackerSlice";
import FilmTile from "./FilmTile";
import "../styles/FilmDisplay.scss";

const FilmDisplay = () => {
  const filmStore = useSelector(selectFilmStore);
  const searchTerm = useSelector(selectSearchTerm);
  const [filteredFilms, setFilteredFilms] = useState(filmStore);

  useEffect(() => {
    setFilteredFilms(
      filmStore.filter((filmStore) =>
        filmStore.title.toLowerCase().includes(searchTerm)
      )
    );
  }, [filmStore, searchTerm]);

  return (
    <>
      <div className="filmContainer">
        {filteredFilms.map((film) => (
          <React.Fragment key={film._id}>
            <FilmTile film={film} />
          </React.Fragment>
        ))}
        {filteredFilms.length === 0 && (
          <>
            <p>No films to display!</p>
          </>
        )}
      </div>
    </>
  );
};

export default FilmDisplay;
