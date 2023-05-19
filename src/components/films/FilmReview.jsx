import React from "react";
import { useEffect } from "react";
import api from "../../api";
import { useState } from "react";

const FilmReview = ({ id }) => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    async function getReviews() {
      const result = await api("GETREVIEWSBYID", { id: id });
      setReviews(result);
      console.log(result);
    }
    getReviews();
  }, []);

  return (
    <div className="individualReview">
      <p>testing</p>
      {/* <p>{review.id}</p>
      <p>{review.rating}</p>
      <p>When: {review.viewingDate}</p>
      <p>Where : {review.location === 1 ? "Cinema" : "Home"}</p>
      <p>{review.review}</p> */}
    </div>
  );
};

export default FilmReview;
