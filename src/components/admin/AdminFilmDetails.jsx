import React from "react";
import { useDispatch } from "react-redux";
import { addClickedFilmId } from "../../features/tracker/trackerSlice";

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
        <p>Date watched</p>
        <p>Location</p>
        <p>Rating out of ten</p>
        <p>Review</p>
        <button className="closeFilmDetails" onClick={onClickClose}>
          X
        </button>
      </div>
    </>
  );
};

export default AdminFilmDetails;
