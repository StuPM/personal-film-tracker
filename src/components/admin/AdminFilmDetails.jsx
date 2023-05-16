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
        <p></p>
        <form action="">
          <label htmlFor="formDateWatched">Date watched</label>
          <input type="date" name="filmDateWatched" id="filmDateWatched" />
          <p>Location</p>
          <p>Rating out of ten</p>
          <label htmlFor="filmReview">Reivew</label>
          <textarea
            name="filmReview"
            id="filmReview"
            cols="30"
            rows="10"
          ></textarea>
        </form>
        <button type="reset">Reset</button>
        <button type="submit">Save</button>
        <button className="closeFilmDetails" onClick={onClickClose}>
          X
        </button>
      </div>
    </>
  );
};

export default AdminFilmDetails;
