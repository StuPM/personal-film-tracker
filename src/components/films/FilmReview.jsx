import React from "react";
import { useEffect, useState } from "react";
import api from "../../api";

const FilmReview = ({ id }) => {
  const [reviews, setReviews] = useState(false);

  useEffect(() => {
    async function getReviews() {
      const result = await api("GETREVIEWSBYID", { id: id });
      setReviews(result);
    }
    getReviews();
  }, []);

  return (
    <div className="individualReview">
      {reviews &&
        reviews.map((review) => (
          <React.Fragment key={review._id}>
            <div className="viewingDate">{review.dateReviewed}</div>
            <div className="location">
              {review.location ? "Cinema" : "Home"}
            </div>
            <div className="rating">{review.rating}</div>
            <div className="review">{review.review}</div>
          </React.Fragment>
        ))}
      {reviews.length === 0 && (
        <>
          <p>No reviews to display!</p>
        </>
      )}
    </div>
  );
};

export default FilmReview;
