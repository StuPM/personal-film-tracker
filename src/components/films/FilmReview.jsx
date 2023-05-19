import React from "react";
import { useEffect, useState } from "react";
import api from "../../api";

const FilmReview = ({ id }) => {
  const [reviews, setReviews] = useState(false);

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
      {reviews &&
        reviews.map((item) => (
          <React.Fragment key={item.id + item.viewingDate}>
            <div className="viewingDate">{item.viewingDate}</div>
            <div className="location">{item.location ? "Cinema" : "Home"}</div>
            <div className="rating">{item.rating}</div>
            <div className="review">{item.review}</div>
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
