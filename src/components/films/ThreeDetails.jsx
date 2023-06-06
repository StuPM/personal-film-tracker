import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addClickedFilmId } from "../../features/tracker/trackerSlice";
import FourReview from "./FourReview";
import { formatDate } from "../../utils";
import api from "../../api";
import { useState } from "react";
import ControlledInput from "./ControlledInput";

const ThreeDetails = ({ film }) => {
  const dispatch = useDispatch();
  const [filmCount, setFilmCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  const onClickClose = async () => {
    dispatch(addClickedFilmId(null));
  };

  const createRating = (rating) => {
    //TODO Can I make this into a component instead?
    let elements = [];

    for (let index = 10; index > 0; index--) {
      if (index === rating) {
        elements.push(
          <React.Fragment key={index}>
            <ControlledInput name={index} checked={1} />
            <label htmlFor={`rating-${index}`}></label>
          </React.Fragment>
        );
      } else {
        elements.push(
          <React.Fragment key={index}>
            <ControlledInput name={index} checked={0} />
            <label htmlFor={`rating-${index}`}></label>
          </React.Fragment>
        );
      }
    }
    return elements;
  };

  //TODO move to other function
  useEffect(() => {
    async function getFilmCount() {
      const result = await api("COUNTFILMSBYID", { id: film.id });
      setFilmCount(result);
    }
    getFilmCount();

    async function getFilmRating() {
      const result = await api("GETFILMRATING", { id: film.id });
      setAverageRating(result);
    }
    getFilmRating();
  }, [film.id]);

  return (
    // <>
    <div className="modal is-active">
      <div className="modal-background" onClick={onClickClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">{film.title}</div>
          <button
            className="delete"
            aria-label="close"
            onClick={onClickClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="block">Released: {formatDate(film.release_date)}</div>
          <div className="block">Overview: {film.overview}</div>
          <div className="columns">
            <div className="column">
              Last watched: {formatDate(film.dateWatched)}
            </div>
            <div className="column">Times watched: {filmCount}</div>
          </div>
          <div className="columns is-vcentered">
            <p className="column">Average Rating: {averageRating}/10.</p>
            <div className="column starContainer">
              {createRating(averageRating)}
            </div>
          </div>
          <FourReview id={film.id} />
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={onClickClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ThreeDetails;
