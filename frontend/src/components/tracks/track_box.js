import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../src/playbuttonpng.png";

import "./track_box.css";

class TrackBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.flip = this.flip.bind(this);

    this.pause_path = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";
    this.play_path =
      "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";
    this.current_action_path = this.play_path;
  }

  flip(play) {
    if (play) {
      this.current_action_path = this.play_path;
    } else {
      this.current_action_path = this.pause_path;
    }
    this.setState({});
  }

  handleClick() {
    let footer_player;
    footer_player = document.getElementById("footer_player");

    this.props.fetchNavTrack(this.props.id).then(() => {

      if (footer_player.paused && footer_player.src === this.props.src_url) {

        footer_player.play();
      } else {
       
        footer_player.pause();
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

    if (!footer_player.paused && footer_player.src === this.props.src_url) {
      this.current_action_path = this.pause_path;
    }
  }

  render() {
    let userLink = null;
    if (this.props.track) {
      userLink = this.props.track.user;
    }

    let markers = [];

    if (this.props.comments) {
      this.props.comments.forEach(comment => {
        if (
          comment.timestamp !== 0 &&
          comment.timestamp !== "" &&
          comment.timestamp !== null &&
          comment.timestamp !== undefined
        ) {
          markers.push(
            <div
              key={`${comment.id}`}
              className="comment-marker"
              style={{
                height: 25,
                width: 3,
                marginLeft: comment.timestamp * 550
              }}
            ></div>
          );
        }
      });
    }

    let username = this.props.track ? (
      <div className="track_item_author">
        <Link
          style={{ textDecoration: "none!important" }}
          to={`/user/${this.props.track.user}`}
        >
          <span>{this.props.track.username}</span>
        </Link>
      </div>
    ) : (
      ""
    );


    return (
      <div className="track_item">
        <div className="track_item_body">
          <div className="track_item_coverart">
            <Link to={`/track/${this.props.id}`}>
              <div style={{ height: "100%", width: "100%" }}>
              <img className="coverart" src={this.props.img_src_url} onerror="this.style.display='none'"></img>
              </div>
            </Link>
          </div>
          <div className="track_item_content">
            <div className="track_item_header">
              <div className="title_container">
                <button
                  className="track_item_play_btn"
                  id={this.props.src_url}
                  onClick={this.handleClick}
                  // style={{ height: "10%" }}
                >
                  <svg id="play_pause_svg">
                    <path
                      id={`current_action_path-${this.props.src_url}`}
                      d={this.current_action_path}
                    />
                  </svg>
                </button>
                <div className="track_item_usernameTitle">
                  {username}
                  <div className="track_item_name">
                    <Link to={`/track/${this.props.id}`}>
                      <span style={{ textDecoration: "none!important" }}>
                        {this.props.trackname}
                      </span>
                    </Link>
                  </div>
                    
                </div>
                <div class="track_item_canvas">
                  <div id="track_item_progress">
                    <div
                      className="track_item_progress_bar"
                      id={`track_item_progress_bar-${this.props.src_url}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackBox);
