import React from "react";
import "./page.css";
import Brendon1 from "../../images/Brendon1.png";

function About() {
  return (
    <>
      <div className="container">
        <section className="row">
          <div className="col-lg-12">
            <h1 className="amTitle"><u>About Me</u></h1>
          </div>
        </section>
        <section className="row">
          <div className="col-lg-4">
            <img className="profilePic" src={Brendon1} alt="Brendon Conatser" />
          </div>
          <div className="col-lg-7 aboutMe">
            <p>
              Hi, my name is Brendon Conatser. I live in Murfreesboro, TN with my wife Brittany and 2 children, Isaac and
              Audrey. I love gaming, music, fishing, and just hanging out with my family. I am a graduate of 
              Vanderbilt's Full Stack Web Development Bootcamp.
          </p>
            <br />
            <p>
              I have had many different jobs in the past ranging from mowing lawns, to working in a factory, even helping
              the disabled. With all of those other jobs I felt like something was missing. Over the years I've come to
              realize I didn't truly feel challenged in my workplace. That is one thing I have really come to enjoy about
              coding and web development, the challenge. I love looking at the different lines of code and trying to figure
              out how to make it better or refactor it to a more readable style.
          </p>
            <br />
            <p>
              This webpage was created to tell you who have stumbled across it a little more about me and maybe even bring
              us together. Look around and click the contact link if you like what you see.
          </p>
          </div>
          <div className="col-lg-1">
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
