import React from "react";
import "./nav_player.css";

class NavPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  navPlayer() {
    return (
      <div className="player-controls">
        <section className="player-controls-inner">
          <div className="player-controls-wrapper">
            <div className="control-elements">
              <button className="play-button" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  render() {
    return this.props.loggedIn ? this.navPlayer() : ""
  }
}

export default NavPlayer;
