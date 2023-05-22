import React from "react";
import { useDispatch } from "react-redux";
import { addClickedFilmId } from "../../features/tracker/trackerSlice";
import AddReview from "./AddReview";
import AddFilm from "./AddFilm";

const AdminFilmDetails = ({ film }) => {
  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(addClickedFilmId(null));
  };
  return (
    <>
      <div className="filmDetails">
        <div className="title">{film.title}</div>
        <div>Overview: {film.overview}</div>
        <AddFilm film={film} />
        <AddReview id={film.id} />
        <button className="closeFilmDetails" onClick={onClickClose}>
          X
        </button>
      </div>
    </>
  );
};

export default AdminFilmDetails;
