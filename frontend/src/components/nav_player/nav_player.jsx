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
    let footer_player;
    footer_player = document.getElementById("footer_player");
    let trackbox_text = document.getElementById(`${this.props.nav_player.track.src_url}`);
    //   if (footer_player.playing) {
    if (trackbox_text !== null) {
      trackbox_text.innerHTML = "pause!";
    }
    //   } else {
    //       trackbox_text.innerHTML = "play!";
    //   }

    // console.log('yoyoyo');
  }

  pause() {
    let footer_player;
    footer_player = document.getElementById("footer_player");
    let trackbox_text = document.getElementById(`${this.props.nav_player.track.src_url}`);

    if (trackbox_text !== null) {
    trackbox_text.innerHTML = "play!";
    }
  }

  timeUpdate() {
    let progress_bar = document.getElementsByClassName(`${this.props.nav_player.track.src_url}`)[0];
    if (progress_bar !== undefined) {
      let footer_player;
      footer_player = document.getElementById("footer_player");
      // if ((footer_player.currentTime / footer_player.duration) !== undefined) {
      if (footer_player.duration) {
        progress_bar.value = (footer_player.currentTime / footer_player.duration);
      }
      // }
   // progress_bar.value = 0.5;
      
      // if (footer_player.paused) {
      //   footer_player = null;
      // }
      
    }
  }
  // attr("value", this.currentTime / this.duration);
  

  navPlayer() {
    return (
      <div className="player-controls">
        <section className="player-controls-inner">
          <div className="player-controls-wrapper">
            <div className="control-elements">
              {/* <button className="play-button" /> */}
              {/* <audio controls> */}
              <audio controls id="footer_player" src={this.props.nav_player.track.src_url} onPlay={this.play} onPause={this.pause} onTimeUpdate={this.timeUpdate} />
              {/* onTimeUpdate={this.timeUpdate} */}
                {/* <source
                  src="https://echo-hive-dev.s3.us-west-1.amazonaws.com/1566193333686"
                  type="audio/mpeg"
                />
              </audio> */}
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
