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
      filmStore.filter((filmStore) => filmStore.title.includes(searchTerm))
    );
  }, [filmStore, searchTerm]);

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
};

export default FilmDisplay;
