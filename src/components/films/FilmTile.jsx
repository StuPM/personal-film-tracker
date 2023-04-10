import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmDetails from "./FilmDetails";
import {
  selectToggleClickedFilm,
  toggleClickedFilm,
} from "../../features/tracker/trackerSlice";

const FilmTile = ({ film }) => {
  const displayFilmDetails = useSelector(selectToggleClickedFilm);
  const dispatch = useDispatch();

  //Cover usecase where there is no poster.
  const poster = "https://image.tmdb.org/t/p/w342" + film.poster_path;

  const onClick = () => {
    dispatch(toggleClickedFilm());
    console.log(film.id);
  };

  return (
    <React.Fragment key={film.id}>
      <div className="filmTile" onClick={onClick}>
        <div>{film.title}</div>
        <img src={poster} alt="" />
      </div>
      {displayFilmDetails && <FilmDetails film={film} />}
    </React.Fragment>
  );
};

export default FilmTile;
