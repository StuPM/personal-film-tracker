import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedYear,
  selectClickedYear,
} from "../../features/tracker/trackerSlice";

const YearSelector = () => {
  const dispatch = useDispatch();
  const [distinctYears, setDistinctYears] = useState([]);
  const [dropdown, setDropDown] = useState(false);
  const clickedYear = useSelector(selectClickedYear);

  useEffect(() => {
    const getDistinctYears = async () => {
      const result = await api("GETDISTINCTYEARS");
      setDistinctYears(result.sort((a, b) => b - a));
    };
    getDistinctYears();
  }, []);

  const dropdownClick = () => {
    setDropDown(!dropdown);
  };

  const captureClickedYear = (e) => {
    console.log(e.target.id);
    dispatch(setClickedYear(Number(e.target.id)));
  };

  return (
    <>
      <div
        className={
          dropdown ? "dropdown is-active is-right" : "dropdown is-right"
        }
      >
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={dropdownClick}
          >
            <span>Select Year</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          className="dropdown-menu"
          id="dropdown-menu"
          role="menu"
          onClick={captureClickedYear}
        >
          <div className="dropdown-content">
            {distinctYears.map((year) => (
              <a
                key={year}
                className={
                  clickedYear === year
                    ? "dropdown-item is-active"
                    : "dropdown-item"
                }
                id={year}
              >
                {year}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default YearSelector;
