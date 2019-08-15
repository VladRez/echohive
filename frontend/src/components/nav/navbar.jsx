import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

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

  render() {
      return (
        <header className="site-nav-header">
              <div className="site-nav-contents">
                <div className="nav-header-left">
                  <div className="header-nav-logo">
                    <a href="/feed">EchoHive</a>
                  </div>
                </div>
                <div className="nav-header-middle"></div>
                <div className="nav-header-right">

                </div>
              </div>
      
            {/* {this.getLinks()} */}
        </header>
      );
  }
}

export default NavBar;