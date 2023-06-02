import React, { useState } from "react";
import "../styles/Admin.scss";
import api from "../../api";

const AddReview = ({ id }) => {
  const [review, setReview] = useState({ id: id, location: false });

  const onInputReview = (e) => {
    let newReviewData;

    if (e.target.id === "location") {
      newReviewData = {
        ...review,
        [e.target.id]: e.target.checked ? true : false,
      }; //True = Cinema, False = Home
    } else {
      newReviewData = { ...review, [e.target.id]: e.target.value };
    }

    setReview(newReviewData);
  };

  const onResetReview = () => {
    setReview({ id: id, location: false });
  };

  const onSubmitReview = async (e) => {
    //TODO Validate data before submit
    e.preventDefault();
    if (
      review.hasOwnProperty("dateReviewed") &&
      review.hasOwnProperty("location") &&
      review.hasOwnProperty("rating") &&
      review.hasOwnProperty("review") &&
      review.hasOwnProperty("id")
    ) {
      const result = await api("ADDREVIEW", review);
      console.log(result);
    }

    console.log(review);
  };

  return (
    <>
      <form
        className="addReview"
        onInput={onInputReview}
        onReset={onResetReview}
        onSubmit={onSubmitReview}
      >
        <div className="watchedContainer">
          <label htmlFor="dateReviewed">Date reviewed:</label>
          <input type="date" name="dateReviewed" id="dateReviewed" />
        </div>

        <div className="locationContainer">
          HOME
          <label htmlFor="location" className="switch">
            <input type="checkbox" id="location" />
            <span className="slider round"></span>
          </label>
          CINEMA
        </div>

        <label htmlFor="review">Review</label>
        <textarea name="review" id="review" cols="30" rows="10"></textarea>

        <div className="buttonContainer">
          <button type="reset">Reset</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};

export default AddReview;
