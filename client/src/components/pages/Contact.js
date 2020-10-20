import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="container">
        <section className="row">
          <div className="col-lg-2">
            <a href="https://github.com/Brendon-Ravn" target="_blank"><u>My Github Account</u></a>
          </div>
          <div className="col-lg-8">
          </div>
          <div className="col-lg-2">
            <a href="https://www.linkedin.com/in/brendon-conatser-0116501b1/" target="_blank"><u>My Linkedin
                  Account</u></a>
          </div>
        </section>
      </div>
      <div className="container crdContainer">
        <section className="row">
          <div className="col-lg-12">
            <h1 className="cntctTitle"><u>Contact Info</u></h1>
          </div>
        </section>
        <section className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">My Email</h5>
                <h6 className="card-subtitle mb-2">b.conatser21@gmail.com</h6>
                <p className="card-text">Above is an email you can reach me at. I will do my best to respond in a timely manner.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </section>
        <br />
        <section className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">My Phone Number</h5>
                <h6 className="card-subtitle mb-2">(931)239-6533</h6>
                <p className="card-text">I am a full time student at the moment so it will be easier to reach me between the hours of 3pm and 8pm</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </section>
        <section className="row">
        </section>
      </div>
    </>
  );
}

export default Contact;
