import React from "react";
import "./nav_player.css";

class NavPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.timeUpdate = this.timeUpdate.bind(this);
  }

  play() {
    let trackbox_text = document.getElementById(
      `${this.props.nav_player.track.src_url}`
    );

    if (trackbox_text !== null) {
      trackbox_text.innerHTML = "pause!";
    }
  }

  pause() {
    let trackbox_text = document.getElementById(
      `${this.props.nav_player.track.src_url}`
    );

    if (trackbox_text !== null) {
      trackbox_text.innerHTML = "play!";
    }
  }

  timeUpdate() {
    let progress_bar = document.getElementsByClassName(
      `${this.props.nav_player.track.src_url}`
    )[0];
    if (progress_bar !== undefined) {
      let footer_player;
      footer_player = document.getElementById("footer_player");
      if (footer_player.duration) {
        progress_bar.value = footer_player.currentTime / footer_player.duration;
      }
    }
  }

  navPlayer() {
    return (
      <div className="player-controls">
        <section className="player-controls-inner">
          <div className="player-controls-wrapper">
            <div className="control-elements">
              <audio
                controls
                id="footer_player"
                src={this.props.nav_player.track.src_url}
                onPlay={this.play}
                onPause={this.pause}
                onTimeUpdate={this.timeUpdate}
              />
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
