import React from "react";
import "../components/styles/About.scss";

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <p className="title is-1">My Film Tracker</p>
        <div>
          This website was created so that you can view the films that I have
          watched recently. Using The Movie Database, film posters and
          information are displayed for you to interactive with.
        </div>
        <p className="title is-2">Tech Used</p>
        <div>
          Film information is stored in a NoSQL Mongo database, for which I have
          created an interface to connect this website to the database. This
          allows for the data to be stored and accessed from anywhere.
        </div>
        <p className="title is-2">Contact</p>
      </div>
    </section>
  );
};

export default About;
