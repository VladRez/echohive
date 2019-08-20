import React from "react";
import "./nav_player.css";

class NavPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    // debugger;
    let footer_player;
    footer_player = document.getElementById("footer_player");
    let trackbox_text = document.getElementById(`${this.props.nav_player.track.src_url}`);
    // debugger;
    //   if (footer_player.playing) {
    // debugger;
    trackbox_text.innerHTML = "pause!";
    //   } else {
    //       trackbox_text.innerHTML = "play!";
    //   }

    // console.log('yoyoyo');
  }

  pause() {
    let footer_player;
    footer_player = document.getElementById("footer_player");
    let trackbox_text = document.getElementById(`${this.props.nav_player.track.src_url}`);

    trackbox_text.innerHTML = "play!";

  }

  

  navPlayer() {
    return (
      <div className="player-controls">
        <section className="player-controls-inner">
          <div className="player-controls-wrapper">
            <div className="control-elements">
              {/* <button className="play-button" /> */}
              {/* <audio controls> */}
                <audio controls id="footer_player" src={this.props.nav_player.track.src_url} onPlay={this.play} onPause={this.pause} />
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
