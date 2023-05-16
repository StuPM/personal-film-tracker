import React from "react";

const FilmReview = ({ review }) => {
  return (
    <>
      <p>{review.id}</p>
      <p>{review.viewingDate}</p>
      <p>{review.location}</p>
      <p>{review.review}</p>
    </>
  );
};

export default FilmReview;
