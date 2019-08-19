import React from "react";
import "./session.css";
const Session = props => {
  const sessionLinks = () => (
    <div className="hero-container">
      <div className="hero-inner">
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
              <a
                href="#"
                onClick={() => props.demoLogin()}
                className="hero-demo"
              >
                Demo
              </a>
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
