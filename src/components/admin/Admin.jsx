import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addClickedFilmId,
  selectClickedFilmId,
  selectApiCallResults,
} from "../../features/tracker/trackerSlice";
import AdminFilmDetails from "./AdminFilmDetails";
import AdminHeader from "./AdminHeader";

const Admin = () => {
  const clickedFilmId = useSelector(selectClickedFilmId);
  const apiCallResults = useSelector(selectApiCallResults);
  const dispatch = useDispatch();

  const onClick = (film) => {
    dispatch(addClickedFilmId(film.id));
  };

  return (
    <>
      <AdminHeader />
      <div className="filmContainer">
        {apiCallResults &&
          apiCallResults.map((film) => (
            <React.Fragment key={film.id}>
              <div
                className="filmTile"
                onClick={() => {
                  onClick(film);
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}
                  alt=""
                />
              </div>
              {clickedFilmId === film.id && <AdminFilmDetails film={film} />}
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default Admin;
