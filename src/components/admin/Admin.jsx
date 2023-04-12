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
    console.log(film.id);
  };

  return (
    <>
      <AdminHeader />
      <div className="filmContainer">
        {apiCallResults &&
          apiCallResults.map((item) => (
            <React.Fragment key={item.id}>
              <div
                className="filmTile"
                onClick={() => {
                  onClick(item);
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                  alt=""
                />
                {clickedFilmId === item.id && <AdminFilmDetails film={item} />}
              </div>
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default Admin;
