import React from "react";
import { useDispatch } from "react-redux";
import { addClickedFilmId } from "../../features/tracker/trackerSlice";
import FilmReview from "./FilmReview";

const FilmDetails = ({ film }) => {
  const dispatch = useDispatch();

  const onClickClose = async () => {
    dispatch(addClickedFilmId(null));
  };

  return (
    <div className="filmDetails">
      <div className="title">{film.title}</div>
      <div>Release: {film.release_date}</div>
      <div>Overview: {film.overview}</div>
      <FilmReview id={film.id} />
      <button className="closeFilmDetails" onClick={onClickClose}>
        X
      </button>
    </div>
  );
};

export default FilmDetails;
