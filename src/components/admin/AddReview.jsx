import React, { useState } from "react";
import "../styles/Admin.scss";

const AddReview = ({ id }) => {
  const [review, setReview] = useState({ id: id, location: false });

  //   location: Boolean, true cinema, false home
  //   review: String,
  //   rating : Number

  const onInputReview = (e) => {
    let newReviewData;

    if (e.target.id === "location") {
      newReviewData = {
        ...review,
        [e.target.id]: e.target.checked ? true : false,
      };
    } else {
      newReviewData = { ...review, [e.target.id]: e.target.value };
    }

    setReview(newReviewData);

    console.log(newReviewData);
  };

  const onResetReview = () => {
    setReview({ id: id, location: false });
  };

  const onSubmitReview = () => {
    //TODO Validate data before submit
    //TODO Send object to api
  };

  return (
    <>
      <form
        className="adminReview"
        onInput={onInputReview}
        onReset={onResetReview}
        onSubmit={onSubmitReview}
      >
        <label htmlFor="dateWatched">Date watched</label>
        <input type="date" name="dateWatched" id="dateWatched" />

        <p>Location</p>
        <div>
          HOME
          <label htmlFor="location" className="switch">
            <input type="checkbox" id="location" />
            <span className="slider round"></span>
          </label>
          CINEMA
        </div>

        <p>Rating out of ten</p>

        <label htmlFor="review">Review</label>
        <textarea name="review" id="review" cols="30" rows="10"></textarea>

        <button type="reset">Reset</button>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default AddReview;
