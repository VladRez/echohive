import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    }
  }

  headerNavBar() {
    
    return (
      <header className="site-nav-header">
        <div className="site-nav-contents">
          <div className="nav-header-left">
            <div className="header-nav-logo">
              <a href="/" />
            </div>
          </div>
          <div className="nav-header-middle" />
          <div className="nav-header-right" >
          <div className="header-nav-button">
              <a href="#/upload" >Upload</a>
            </div>
            <div className="header-nav-button">
              <a href="/" onClick={this.logoutUser}>Logout</a>
            </div>
            <div className="header-nav-button">
              <a href={`#/user/${this.props.currentUser.id}`} >{this.props.currentUser.username}</a>
            </div>
          </div>
        </div>

        {/* {this.getLinks()} */}
      </header>
    );
  }

  render() {
    return this.props.loggedIn ? this.headerNavBar() : "";
  }
}

export default NavBar;
