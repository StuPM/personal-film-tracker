import React from "react";
import { useDispatch } from "react-redux";
import { addClickedFilmId } from "../../features/tracker/trackerSlice";

const FilmDetails = ({ film }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addClickedFilmId(null));
  };

  return (
    <div className="filmDetails">
      <div className="title">{film.title}</div>
      <div>Release: {film.release_date}</div>
      <div>Overview: {film.overview}</div>
      <div className="reviewContainer">
        Viewing history:
        {/* <div>Viewing history:</div> */}
        <div className="individualReview">
          <div>Review 1...</div>
          <div>Rating 1...</div>
          <div>Watched 22nd Feb 2023, at Home/Cinema</div>
        </div>
      </div>
      <button className="closeFilmDetails" onClick={onClick}>
        X
      </button>
    </div>
  );
};

export default FilmDetails;
