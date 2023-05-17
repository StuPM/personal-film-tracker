import React from "react";

const FilmReview = ({ review }) => {
  return (
    <div className="individualReview">
      <p>{review.id}</p>
      <p>{review.rating}</p>
      <p>When: {review.viewingDate}</p>
      <p>Where : {review.location === 1 ? "Cinema" : "Home"}</p>
      <p>{review.review}</p>
    </div>
  );
};

export default FilmReview;
