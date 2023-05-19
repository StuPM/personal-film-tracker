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

  //Cover usecase where there is no poster.
  const poster = "https://image.tmdb.org/t/p/w342" + film.poster_path;

  const onClick = () => {
    dispatch(addClickedFilmId(film.id));
  };

  return (
    <React.Fragment key={film.id}>
      <div className="filmTile" onClick={onClick}>
        <div>{film.title}</div>
        <img src={poster} alt="" />
      </div>
      {clickedFilmId === film.id && <FilmDetails film={film} />}
    </React.Fragment>
  );
};

export default FilmTile;
