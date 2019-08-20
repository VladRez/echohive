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
              {/* <button className="play-button" /> */}
              <audio controls>
                <source
                  src="https://echo-hive-dev.s3.us-west-1.amazonaws.com/1566193333686"
                  type="audio/mpeg"
                />
              </audio>
            </div>
          </div>
        </section>
      </div>
    );
  }

  render() {
    return this.props.loggedIn ? this.navPlayer() : "";
  }
}

export default NavPlayer;
