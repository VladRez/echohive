import React from "react";
import { Link, withRouter } from "react-router-dom";

class TrackBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClick() {
    this.props.fetchNavTrack(this.props.id).then(() => {
      let footer_player;
      footer_player = document.getElementById("footer_player");

      let trackbox_text = document.getElementById(`${this.props.src_url}`);

      if (footer_player.paused) {
        footer_player.play();
        Array.from(document.getElementsByClassName("play-button")).forEach(
          ele => {
            ele.innerHTML = "play";
          }
        );
        trackbox_text.innerHTML = "pause!";
      } else {
        footer_player.pause();
        Array.from(document.getElementsByClassName("play-button")).forEach(
          ele => {
            ele.innerHTML = "play";
          }
        );
      }
    });
    if (this.props.fetchComments) {
      this.props.fetchComments(this.props.id);
    }
    if (this.props.fetchComments) {
      this.props.fetchComments(this.props.id);
    }
  }
  handleShow() {
    this.props.history.push(`/track/${this.props.id}`);
  }

  componentDidMount() {
    let footer_player;
    footer_player = document.getElementById("footer_player");
    let trackbox_text = document.getElementById(`${this.props.src_url}`);
    if (!footer_player.paused && footer_player.src === trackbox_text.id) {
      trackbox_text.innerHTML = "pause!";
    }
  }

  render() {
    let userLink = null;
    if (this.props.track) {
      userLink = this.props.track.user;
    }
    return (
      <div className="outer-trackbox">
        <div className="inner-trackbox">
          <div className="img_container" onClick={this.handleShow}>
            <img className="img-content" src={this.props.img_src_url}></img>
          </div>
          <div className="artist">
            <Link to={`/user/${userLink}`}>Profile</Link>
          </div>
          <div className="ticker-wrap" onClick={this.handleShow}>
            <div className="ticker">
              <div className="trackname">
                <Link to={`/track/${this.props.id}`}>
                  {this.props.trackname} {this.props.trackname}
                </Link>
              </div>
            </div>
          </div>
          <figure>
            <button
              className="play-button"
              id={this.props.src_url}
              onClick={this.handleClick}
              style={{ height: "10%" }}
            >
              play!
            </button>
            <progress
              className={this.props.src_url}
              value="0"
              max="1"
            ></progress>
          </figure>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackBox);
