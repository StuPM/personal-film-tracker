import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectFilmStore,
  selectSearchTerm,
  selectClickedYear,
} from "../../features/tracker/trackerSlice";
import TwoTile from "./TwoTile";
import { getStringMonth } from "../../utils";

const OneDisplay = () => {
  const filmStore = useSelector(selectFilmStore);
  const searchTerm = useSelector(selectSearchTerm);
  const clickedYear = useSelector(selectClickedYear);

  const [filteredFilms, setFilteredFilms] = useState(filmStore);

  useEffect(() => {
    setFilteredFilms(
      filmStore.filter((filmStore) =>
        filmStore.title.toLowerCase().includes(searchTerm)
      )
    );
  }, [filmStore, searchTerm]);

  const createfilms = () => {
    let currentMonth = 13;
    let elements = [
      <React.Fragment key={clickedYear}>
        <h1 className="column is-full title yearMonth">{clickedYear}</h1>
      </React.Fragment>,
    ];

    filteredFilms.forEach((film) => {
      const filmDate = new Date(film.dateWatched).getMonth();

      if (filmDate !== currentMonth) {
        currentMonth = filmDate;
        elements.push(
          <React.Fragment key={currentMonth}>
            <div className="column is-full title yearMonth">
              {getStringMonth(currentMonth)}
            </div>
          </React.Fragment>
        );
      }
      elements.push(
        <React.Fragment key={film._id}>
          <TwoTile film={film} />
        </React.Fragment>
      );
    });

    return elements;
  };
  return (
    <>
      <div className="columns is-gapless is-multiline is-mobile">
        {filteredFilms.length > 0 && createfilms()}
        {filteredFilms.length === 0 && (
          <div className="column is-half is-offset-one-quarter">
            <div className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="level">No films to display!</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OneDisplay;
