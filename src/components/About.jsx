import React from "react";

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="block">
          <p className="title is-1">Track My Films!</p>
          <div className="block">
            Welcome to the personal film tracker for me, Stuart Paul McGee. Here
            you may view and interactive list of the films that I have watched
            over the past few years.
          </div>
          <div className="block">
            <ul>
              You may:
              <li className="pl-3">
                Search through the film titles for the displayed year, using the
                search bar.
              </li>
              <li className="pl-3">
                Select the year of films to view via the drop down.
              </li>
              <li className="pl-3">
                Click on a filter poster to view more data about the film and
                see my average rating!
              </li>
            </ul>
          </div>
        </div>
        <div className="block">
          <p className="title is-2">Technology Stack</p>
          <div className="block">
            The website itself was built using the React framework, with
            functional components. React Router is used to control navigation
            through the website, such as setting the URL on this About page.
            Certain piecies of information is then stored locally, such as
            controlling what film details to display or the search term inputted
            by the user.
          </div>
          <div className="block">
            For storage a MongoDB NoSQL database is used, hosted on the MongoDB
            Atlas platform. This is where all the film information is stored as
            well as the reviews that have been entered. To access this
            information, a custom backend has been created which provides the
            API routes to GET and POST the required data.
          </div>
        </div>
        <div className="block">
          <p className="title is-2">Contact</p>
          <div>
            If you have any questions about this website or just want to get in
            touch, please contact me at either
            <a href="https://www.linkedin.com/in/stuartpmcgee/"> LinkedIn</a> or
            <a href="https://github.com/StuPM"> GitHub</a>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
