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
    // createfilms();
  }, [filmStore, searchTerm]);

  const createfilms = () => {
    let elements = [];

    let shouldDrawMonthTitle = true;
    let currentMonth = new Date().getMonth();

    {
      filteredFilms.map((film) => {
        const filmDate = new Date(film.dateWatched).getMonth();
        console.log("Title: " + film.title + ", Month: " + filmDate);

        if (filmDate === currentMonth) {
          if (shouldDrawMonthTitle === true) {
            elements.push(
              <>
                <div className="column is-full">
                  {getStringMonth(currentMonth)}
                </div>
              </>
            );
            shouldDrawMonthTitle = false;
          }

          elements.push(
            <React.Fragment key={film._id}>
              <TwoTile film={film} />
            </React.Fragment>
          );
        } else {
          currentMonth = filmDate;
          elements.push(
            <>
              <div className="column is-full">
                {getStringMonth(currentMonth)}
              </div>
              <React.Fragment key={film._id}>
                <TwoTile film={film} />
              </React.Fragment>
            </>
          );
        }
      });
    }

    return elements;
  };
  return (
    <>
      <div className="title">{clickedYear}</div>
      <div className="columns is-gapless is-multiline is-mobile">
        {createfilms()}
        {/* {filteredFilms.map((film) => {
          createfilms(film);
          // const filmDate = new Date(film.dateWatched).getMonth();

          // if (filmDate === currentMonth && drawMonthTitle) {
          //   console.log("Draw month " + drawMonthTitle);

          //   dispatch(setDrawMonthTitle(false));
          //   // setDrawMonthTitle(true);
          //   console.log("Draw month " + drawMonthTitle);
          //   return (
          //     <React.Fragment key={film._id}>
          //       <TwoTile film={film} />
          //     </React.Fragment>
          //   );
          // }
          // return (
          //   <React.Fragment key={film._id}>
          //     <TwoTile film={film} />
          //   </React.Fragment>
          // );
        })} */}

        {/* {filteredFilms.map((film) => (
          <React.Fragment key={film._id}>
            <TwoTile film={film} />
          </React.Fragment>
        ))} */}
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
