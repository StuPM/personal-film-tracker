import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClickedFilmId } from "../../features/tracker/trackerSlice";
import { selectRatingReviewStore } from "../../features/tracker/trackerSlice";
import { useEffect } from "react";
import FilmReview from "./FilmReview";

const FilmDetails = ({ film }) => {
  const dispatch = useDispatch();
  const ratingReviewStore = useSelector(selectRatingReviewStore);

  const onClickClose = () => {
    dispatch(addClickedFilmId(null));
  };

  const filterReviews = ratingReviewStore.filter((num) => num.id === film.id);
  console.log(filterReviews);

  return (
    <div className="filmDetails">
      <div className="title">{film.title}</div>
      <div>Release: {film.release_date}</div>
      <div>Overview: {film.overview}</div>
      {filterReviews.map((review) => (
        <div className="reviewContainer">
          <FilmReview review={review} key={review.id + review.viewingDate} />
        </div>
      ))}
      <button className="closeFilmDetails" onClick={onClickClose}>
        X
      </button>
    </div>
  );
};

export default FilmDetails;
