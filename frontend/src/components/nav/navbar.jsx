import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  headerNavBar() {
    return (
      <header className="site-nav-header">
        <div className="site-nav-contents">
          <div className="nav-header-left">
            <div className="header-nav-logo">
              <a href="/feed" />
            </div>
          </div>
          <div className="nav-header-middle" />
          <div className="nav-header-right">
            <div className="header-nav-button">
              <a href="#/tracks/upload">Upload</a>
            </div>
            <div className="header-nav-button">
              <a href="/" onClick={this.logoutUser}>
                Logout
              </a>
            </div>
            <div className="header-nav-button">
              <a href={`#/user/${this.props.currentUser.id}`}>
                {this.props.currentUser.username}
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }

  render() {
    return this.props.loggedIn ? this.headerNavBar() : "";
  }
}

export default NavBar;
