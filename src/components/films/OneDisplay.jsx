import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectFilmStore,
  selectSearchTerm,
} from "../../features/tracker/trackerSlice";
import TwoTile from "./TwoTile";

const OneDisplay = () => {
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
      <div className="columns is-gapless is-multiline is-mobile">
        {filteredFilms.map((film) => (
          <React.Fragment key={film._id}>
            <TwoTile film={film} />
          </React.Fragment>
        ))}
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
