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
    <div className="block box">
      <div className="title is-5">Add Review</div>
      <form
        className="addReview"
        onInput={onInputReview}
        onReset={onResetReview}
        onSubmit={onSubmitReview}
      >
        <div className="field is-horizontal">
          <label className="label field-label" htmlFor="dateReviewed">
            Date reviewed:
          </label>
          <div className="field-body">
            <div className="control">
              <input type="date" name="dateReviewed" id="dateReviewed" />
            </div>
          </div>
        </div>

        <div className="field is-horizontal is-grouped">
          <label className="label field-label">Home</label>
          <div className="control field-body">
            <label htmlFor="location" className="switch label">
              <input type="checkbox" id="location" />
              <span className="slider round"></span>
            </label>
            <label className="label ">Cinema</label>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="review ">
            Review
          </label>
          <div className="control">
            <textarea className="textarea" name="review" id="review"></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
