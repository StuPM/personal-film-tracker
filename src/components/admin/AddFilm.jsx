import React, { useState } from "react";
import api from "../../api";

const AddFilm = ({ film, closeAfterClick }) => {
  const [newFilm, setNewFilm] = useState({ ...film, location: false });

  const onInputFilm = (e) => {
    let newFilmData;

    if (e.target.id.includes("rating")) {
      newFilmData = {
        ...newFilm,
        rating: Number(e.target.id.substring(e.target.id.indexOf("-") + 1)),
      };
    } else if (e.target.id === "location") {
      newFilmData = {
        ...newFilm,
        [e.target.id]: e.target.checked ? true : false,
      }; //True = Cinema, False = Home
    } else {
      newFilmData = { ...newFilm, [e.target.id]: e.target.value };
    }

    setNewFilm(newFilmData);
  };

  const onSubmitFilm = async (e) => {
    //TODO Validate data before submit
    e.preventDefault();
    if (
      newFilm.hasOwnProperty("location") &&
      newFilm.hasOwnProperty("rating") &&
      newFilm.hasOwnProperty("dateWatched")
    ) {
      await api("ADDFILM", newFilm);
      closeAfterClick();
    } else {
      console.log("Missing something.");
    }
  };

  return (
    <div className="block box">
      <div className="title is-5">Add Film</div>
      <form className="addFilm" onInput={onInputFilm} onSubmit={onSubmitFilm}>
        <div className="field is-horizontal">
          <label className="label field-label" htmlFor="dateWatched">
            Date watched
          </label>
          <div className="field-body">
            <div className="control">
              <input type="date" name="dateWatched" id="dateWatched" />
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <label className="label field-label">Rating</label>

          <div className="field-body">
            <div className="control ratingContainer">
              <div className=" starContainer">
                <input type="radio" name="rating" id="rating-10" />
                <label htmlFor="rating-10"></label>
                <input type="radio" name="rating" id="rating-9" />
                <label htmlFor="rating-9"></label>
                <input type="radio" name="rating" id="rating-8" />
                <label htmlFor="rating-8"></label>
                <input type="radio" name="rating" id="rating-7" />
                <label htmlFor="rating-7"></label>
                <input type="radio" name="rating" id="rating-6" />
                <label htmlFor="rating-6"></label>
                <input type="radio" name="rating" id="rating-5" />
                <label htmlFor="rating-5"></label>
                <input type="radio" name="rating" id="rating-4" />
                <label htmlFor="rating-4"></label>
                <input type="radio" name="rating" id="rating-3" />
                <label htmlFor="rating-3"></label>
                <input type="radio" name="rating" id="rating-2" />
                <label htmlFor="rating-2"></label>
                <input type="radio" name="rating" id="rating-1" />
                <label htmlFor="rating-1"></label>
              </div>
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
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFilm;
