import React from "react";
import Clipboard from "react-clipboard.js";
import "./Info.css";

export default function Info() {
  return (
    <div className="main-paragraph">
      <p className="intro-content">
        Nico Raymundo is a developer and casual photographer from the San Francisco Bay
        Area, currently in New York City and at{" "}
        <a class="intext-hyperlink" href="http://americanexpress.com" target="_blank">
          American Express
        </a>
        .
      </p>
      <hr className="divider" />
      <div className="bottom-section">
        <div className="about">
          <p>ABOUT</p>
          <p>
            I am currently working remotely as a software engineer for American
            Express. I was born and raised in San Jose, CA but decided to migrate
            south for college. Post-grad, I decided to stay in southern california,
            setting up residence in Los Angeles. Living here has given me an
            opportunity to try new things, visit new unfamiliar places, and
            cultivate relationships with incredible people from around the globe.
          </p>
          <p>
            At American Express, my main responsibility is creating, maintaining
            and enhancing various web apps built with ReactJS. In addition to this,
            my role includes contributing to code reviews and helping build out fully
            automated testing for our applications.
          </p>
          <p>
            At LMU, I had the opportunity to take part in a multitude of
            extra-curricular activities. As the former Vice-President of
            Outreach for the LMU chapter of the Association for Computing
            Machinery, we were tasked with organizing events for the LMU CS
            community, with our biggest event being the first ever LMU Hackathon.
          </p>
          <p>
            Outside of school, I enjoy playing sports with friends, taking photos and walking around the city,
            listening to {" "}
            <a class="about-intext-hyperlink" href="https://open.spotify.com/user/kdotoverlord?si=b932916d03cf4b81" target="_blank">
              music
            </a>
            , working on my side projects, or going on runs in Central Park.
          </p>
          <p>I'd love to get to know you, so don't hesitate to get in touch!</p>
        </div>
        <div className="side-section">
          <div className="cv">
            <p>CV</p>
            <p>
              American Express
              <br />
              Engineer II
              <br />
              2021 - Present
            </p>
            <p>
              Loyola Marymount University
              <br />
              BA Computer Science
              <br />
              2017 - 2021
            </p>
            <p>
              Maxim Integrated
              <br />
              IT Business Intelligence Intern
              <br />
              2020
            </p>
            <p>
              Loyola Marymount University
              <br />
              Computer Science Teaching Assistant
              <br />
              2018 - 2021
            </p>
            <p>
              Association for Computing Machinery
              <br />
              Vice President of Outreach
              <br />
              2018 - 2021
            </p>
          </div>
          <div className="connect">
            <p>CONNECT</p>
            <p>
              <Clipboard
                className="email"
                data-clipboard-text="nraymund@lion.lmu.edu"
              >
                Email
              </Clipboard>
            </p>
            <p>
              <a
                className="social"
                href="https://www.instagram.com/nicoraymundo/"
                target="_blank"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                className="social"
                href="https://twitter.com/nicoraymundo2"
                target="_blank"
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                className="social"
                href="https://github.com/nraymundo"
                target="_blank"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                className="social"
                href="https://www.linkedin.com/in/nicolasraymundo/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
