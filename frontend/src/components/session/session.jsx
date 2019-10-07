import React from "react";
import "./session.css";
const Session = props => {
  const sessionLinks = () => (
    <div className="hero-container">
      <div className="hero-inner">
       
      {/* <div className="hero-wave-wrapper wrapper-reverse">
          <div className="hero-wave -a rev"></div>
          <div className="hero-wave -b rev"></div>
          <div className="hero-wave -c rev"></div>
        </div>
        <div className="hero-wave-wrapper">
          <div className="hero-wave -a"></div>
          <div className="hero-wave -b"></div>
          <div className="hero-wave -c"></div>
        </div> */}
        <div className="hero-front">
          <div className="hero-front-container">
            <span className="hero-project-logo" />
            <div className="hero-login-signin">
              <button
                className="hero-login-button"
                onClick={() => props.openModal("login")}
              >
                Login
              </button>
              <button
                className="hero-signup-button"
                onClick={() => props.openModal("signup")}
              >
                Signup
              </button>
              <button
                href="#"
                onClick={() => props.demoLogin()}
                className="hero-demo"
              >
                Demo
              </button>
            </div>

            <div className="hero-minislide">
            
              <img
                src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Slide 4"
              />
              <img
                src="https://images.unsplash.com/photo-1453575969485-2644bab303a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Slide 3"
              />

              <img
                src="https://images.unsplash.com/photo-1528724747537-1634153aa3c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Slide 2"
              />

              <img
                src="https://images.unsplash.com/photo-1500627345056-c0094b32aaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Slide 1"
              />
              <div className="tagline">
          <p>Discover and enjoy the greatest selection of sound samples from the most diverse audio engineers.</p>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const welcomePage = () => <h1>Logged in!</h1>;
  return props.isAuthenticated ? welcomePage() : sessionLinks();
};

export default Session;

