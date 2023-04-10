import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmDetails from "./FilmDetails";
import {
  addClickedFilmId,
  selectClickedFilmId,
  selectToggleClickedFilm,
  toggleFilmTileClicked,
} from "../../features/tracker/trackerSlice";

const FilmTile = ({ film }) => {
  //Can I remove this and just check if the clickedFilmId is the film ID?
  //Set back to null or 0 when the x of filmDetail is clicked
  const toggleFilmDetails = useSelector(selectToggleClickedFilm);
  const clickedFilmId = useSelector(selectClickedFilmId);
  const dispatch = useDispatch();

  //Cover usecase where there is no poster.
  const poster = "https://image.tmdb.org/t/p/w342" + film.poster_path;

  const onClick = () => {
    dispatch(toggleFilmTileClicked());
    dispatch(addClickedFilmId(film.id));
    console.log(film.id);
  };

  return (
    <React.Fragment key={film.id}>
      <div className="filmTile" onClick={onClick}>
        <div>{film.title}</div>
        <img src={poster} alt="" />
      </div>
      {toggleFilmDetails && clickedFilmId === film.id && (
        <FilmDetails film={film} />
      )}
    </React.Fragment>
  );
};

export default FilmTile;
