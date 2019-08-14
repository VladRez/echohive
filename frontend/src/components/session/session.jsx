import React from "react";

const Session = props => {
  
  const sessionLinks = () => (
    <nav className="longin-signup">
      <button onClick={() => props.openModal("login")}>Login</button>
    
      <button onClick={() => props.openModal("signup")}>Signup</button>
    </nav>
  );
  const welcomePage = () => <h1>Logged in!</h1>;
  return props.isAuthenticated ? welcomePage() : sessionLinks();
};

export default Session;
