import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmDetails from "./FilmDetails";
import {
  addClickedFilmId,
  selectClickedFilmId,
} from "../../features/tracker/trackerSlice";

const FilmTile = ({ film }) => {
  const clickedFilmId = useSelector(selectClickedFilmId);
  const dispatch = useDispatch();

  //TODO Cover usecase where there is no poster.
  const poster = "https://image.tmdb.org/t/p/w342" + film.poster_path;

  const onClick = () => {
    dispatch(addClickedFilmId(film.id));
  };

  return (
    <React.Fragment key={film._id}>
      <div className="column is-one-third" onClick={onClick}>
        <img src={poster} alt="Film poster" />
      </div>
      {clickedFilmId === film.id && <FilmDetails film={film} />}
    </React.Fragment>
  );
};

export default FilmTile;
