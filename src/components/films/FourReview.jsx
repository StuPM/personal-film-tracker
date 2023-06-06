import React from "react";
import { useEffect, useState } from "react";
import api from "../../api";
import { formatDate } from "../../utils";

const FourReview = ({ id }) => {
  const [reviews, setReviews] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      const result = await api("GETREVIEWSBYID", { id: id });
      setReviews(result);
    };
    getReviews();
  }, [id]);

  return (
    <div className="container">
      {reviews &&
        reviews.map((review) => (
          <article key={review._id}>
            <div className="columns">
              <div className="column">
                Review date: {formatDate(review.dateReviewed)}
              </div>
              <div className="column">
                Location:
                {review.location ? " Cinema" : " Home"}
              </div>
            </div>
            <div className="columns">
              <div className="column">{review.review}</div>
            </div>
          </article>
        ))}
    </div>
  );
};

export default FourReview;
