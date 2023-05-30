import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/styles/About.scss";

const About = () => {
  const [sliderClass, setSliderClass] = useState(false);

  const onClickAbout = () => {
    sliderClass === true ? setSliderClass(false) : setSliderClass(true);
  };

  return (
    <>
      <header className="container">
        <h1>SPM - About this Film Tracker </h1>
        <Link to="/">Home</Link>
      </header>
      <h3>Desc Tech Contact</h3>
      <div>
        This website was created so that you can view the films that I have
        watched recently. Using The Movie Database, film posters and information
        are displayed for you to interactive with.
      </div>
      <div>
        Film information is stored in a NoSQL Mongo database, for which I have
        created an interface to connect this website to the database. This
        allows for the data to be stored and accessed from anywhere.
      </div>
      <button onClick={onClickAbout}>Close</button>
    </>
  );
};

export default About;
