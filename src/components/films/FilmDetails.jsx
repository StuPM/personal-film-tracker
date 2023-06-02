import React from "react";
import { useDispatch } from "react-redux";
import { addClickedFilmId } from "../../features/tracker/trackerSlice";
import FilmReview from "./FilmReview";
import { formatDate } from "../../utils";

const FilmDetails = ({ film }) => {
  const dispatch = useDispatch();

  const onClickClose = async () => {
    dispatch(addClickedFilmId(null));
  };

  const createRating = (rating) => {
    let elements = [];
    console.log(rating);

    for (let index = 10; index > 0; index--) {
      if (index === rating) {
        elements.push(
          <React.Fragment key={index}>
            <input
              type="radio"
              name="rating"
              id={`rating-${index}`}
              disabled
              checked
            />
            <label htmlFor={`rating-${index}`}></label>
          </React.Fragment>
        );
      } else {
        elements.push(
          <React.Fragment key={index}>
            <input type="radio" name="rating" id={`rating-${index}`} disabled />
            <label htmlFor={`rating-${index}`}></label>
          </React.Fragment>
        );
      }
    }
    return elements;
  };

  return (
    <div className="filmDetails">
      <div className="container">
        <h2 className="title">{film.title}</h2>
        <div>Released: {formatDate(film.release_date)}</div>
        <div>Overview: {film.overview}</div>
        <FilmReview id={film.id} />
        <div className="starContainer">{createRating(film.rating)}</div>
        {/* <div className="starContainer">
          <input type="radio" name="rating" id="rating-6" checked disabled />
          <label htmlFor="rating"></label>
        </div> */}
        <button className="closeFilmDetails" onClick={onClickClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default FilmDetails;
