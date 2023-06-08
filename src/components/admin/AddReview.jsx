import React, { useState } from "react";
import "../styles/Admin.scss";
import api from "../../api";

const AddReview = ({ id, closeAfterClick }) => {
  const [review, setReview] = useState({ id: id });

  const onInputReview = (e) => {
    let newReviewData = { ...review, [e.target.id]: e.target.value };

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
      review.hasOwnProperty("rating") &&
      review.hasOwnProperty("review") &&
      review.hasOwnProperty("id")
    ) {
      await api("ADDREVIEW", review);
      closeAfterClick();
    } else {
      console.log("Missing something.");
    }
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
