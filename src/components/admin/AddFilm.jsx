import React, { useState } from "react";
import api from "../../api";

const AddFilm = ({ film }) => {
  const [newFilm, setNewFilm] = useState({ ...film });

  console.log(newFilm);

  const onInputFilm = (e) => {
    const newFilmData = { ...newFilm, [e.target.id]: e.target.value };
    setNewFilm(newFilmData);
  };

  const onSubmitFilm = async (e) => {
    e.preventDefault();
    const result = await api("ADDFILM", newFilm);
    console.log(result);
  };

  return (
    <>
      <p>add film</p>
      <form className="addFilm" onInput={onInputFilm} onSubmit={onSubmitFilm}>
        <div className="watchedContainer">
          <label htmlFor="dateWatched">Date watched</label>
          <input type="date" name="dateWatched" id="dateWatched" />
        </div>

        <div className="buttonContainer">
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};

export default AddFilm;
