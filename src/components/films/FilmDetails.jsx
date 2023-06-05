import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addClickedFilmId } from "../../features/tracker/trackerSlice";
import FilmReview from "./FilmReview";
import { formatDate } from "../../utils";
import api from "../../api";
import axios from "axios";
import { useState } from "react";

const FilmDetails = ({ film }) => {
  const [filmCount, setFilmCount] = useState(0);

  const dispatch = useDispatch();

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
            <input
              type="radio"
              name="rating"
              id={`rating-${index}`}
              disabled
              checked
            />
            <label htmlFor={`rating-${index}`}></label>
          </React.Fragment>
        );
      } else {
        elements.push(
          <React.Fragment key={index}>
            <input type="radio" name="rating" id={`rating-${index}`} disabled />
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
  }, []);

  return (
    // <>
    <div className="modal is-active">
      <div className="modal-background" onClick={onClickClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{film.title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClickClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <div>Released: {formatDate(film.release_date)}</div>
          <div>Overview: {film.overview}</div>
          <div className="starContainer">{createRating(film.rating)}</div>
          <FilmReview id={film.id} />
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={onClickClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
    // </>

    //   <div className="column model is-active">
    //     <div className="container">
    //       <h2 className="title">{film.title}</h2>
    //       <div className="subtitle is-4">
    //         Released: {formatDate(film.release_date)}
    //       </div>
    //       <div className="subtitle is-4">Overview: {film.overview}</div>
    //       <div className="starContainer">{createRating(film.rating)}</div>
    //       <FilmReview id={film.id} />

    //       <button className="closeFilmDetails" onClick={onClickClose}>
    //         X
    //       </button>
    //     </div>
    //   </div>
  );
};

export default FilmDetails;
