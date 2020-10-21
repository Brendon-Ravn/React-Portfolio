import React from "react";
import "./page.css";
import BurgerApp from "../../images/BurgerApp.png";
import CodeQ14 from "../../images/CodeQ_14.png";
import CodingQuiz from "../../images/Coding-Quiz.png";
import Dybs from "../../images/Dybs.png";
import WthrDshbrd from "../../images/Weather-Dashboard.png";
import WrkdaySched from "../../images/Workday-Scheduler.png";
import resume from "../../Assets/BIC-Resume.pdf";

function Portfolio() {
  return (
    <>
      <div className="container cntnrTitle">
        <section className="row">
          <div className="col-lg-12">
            <h1 className="portTitle"><u>Portfolio</u></h1>
          </div>
        </section>
        <section className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="card">
              <img src={Dybs} className="card-img-top" alt="DYBS website" />
              <div className="card-body">
                <h5 className="card-title">DYBS</h5>
                <a href="https://github.com/haleynmyers/dybs" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repository</a>
                <a href="https://haleynmyers.github.io/dybs/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Deployed Site</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={CodeQ14} className="card-img-top" alt="CodeQ_14 Member Page" />
              <div className="card-body">
                <h5 className="card-title">CodeQ_14</h5>
                <a href="https://github.com/Brendon-Ravn/CodeQ_14" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repository</a>
                <a href="https://floating-lake-58367.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Deployed Site</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </section>
        <section className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="card">
              <img src={CodingQuiz} className="card-img-top" alt="Coding Quiz website" />
              <div className="card-body">
                <h5 className="card-title">Fun Coding Quiz</h5>
                <a href="https://github.com/Brendon-Ravn/js-quizC" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repository</a>
                <a href="https://brendon-ravn.github.io/js-quiz/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Deployed Site</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={WrkdaySched} className="card-img-top" alt="Workday Scheduler website" />
              <div className="card-body">
                <h5 className="card-title">Workday Scheduler</h5>
                <a href="https://github.com/Brendon-Ravn/workday-scheduler" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repository</a>
                <a href="https://brendon-ravn.github.io/workday-scheduler/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Deployed Site</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </section>
        <section className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="card">
              <img src={WthrDshbrd} className="card-img-top" alt="Weather Dashboard website" />
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <a href="https://github.com/Brendon-Ravn/Weather-Dashboard" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repository</a>
                <a href="https://brendon-ravn.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Deployed Site</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={BurgerApp} className="card-img-top" alt="Eat-Da-Burger App" />
              <div className="card-body">
                <h5 className="card-title">Eat-Da-Burger</h5>
                <a href="https://github.com/Brendon-Ravn/Eat-Da-Burger" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repository</a>
                <a href="https://infinite-falls-53972.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Deployed Site</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </section>
        <section className="row">
          <div className="col-lg-5"></div>
          <div className="col-lg-2">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary">My Resume</a>
          </div>
          <div className="col-lg-5"></div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
