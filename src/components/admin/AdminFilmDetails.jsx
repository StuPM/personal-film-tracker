import React from "react";
import { useDispatch } from "react-redux";
import { addClickedFilmId } from "../../features/tracker/trackerSlice";
import AddReview from "./AddReview";
import AddFilm from "./AddFilm";
import { formatDate } from "../../utils";

const AdminFilmDetails = ({ film }) => {
  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(addClickedFilmId(null));
  };

  return (
    <>
      <div className="modal is-active ">
        <div className="moda-background" onClick={onClickClose}></div>
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
            <div className="block">
              Released: {formatDate(film.release_date)}
            </div>
            <div className="block">Overview: {film.overview}</div>

            <AddFilm film={film} closeAfterClick={onClickClose} />
            <AddReview id={film.id} closeAfterClick={onClickClose} />
          </section>
          <footer className="modal-card-foot">
            <button className="button" onClick={onClickClose}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AdminFilmDetails;
