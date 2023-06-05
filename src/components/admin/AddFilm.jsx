import React, { useState } from "react";
import api from "../../api";

const AddFilm = ({ film }) => {
  const [newFilm, setNewFilm] = useState({ ...film });

  const onInputFilm = (e) => {
    let newFilmData;

    if (e.target.id.includes("rating")) {
      newFilmData = {
        ...newFilm,
        rating: Number(e.target.id.substring(e.target.id.indexOf("-") + 1)),
      };
    } else {
      newFilmData = { ...newFilm, [e.target.id]: e.target.value };
    }

    setNewFilm(newFilmData);
  };

  const onSubmitFilm = async (e) => {
    //TODO Validate data before submit
    e.preventDefault();
    const result = await api("ADDFILM", newFilm);
    console.log(result);
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
