import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../src/playbuttonpng.png";

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
      // let image_sourced = document.getElementById(`${this.props.src_url}A`);

      // debugger;
      if (footer_player.paused) {
        footer_player.play();
        Array.from(document.getElementsByClassName("play-button")).forEach(
          ele => {
            // ele.innerHTML = "play";
          }
        );
        // trackbox_text.innerHTML = "pause!";
        // image_sourced.src = require("../../../src/playbuttonpng.png");
      } else {
        footer_player.pause();
        Array.from(document.getElementsByClassName("play-button")).forEach(
          ele => {
            // ele.innerHTML = "play";
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
    // this.props.fetchComments(this.props.id);

    let footer_player;
    footer_player = document.getElementById("footer_player");
    let trackbox_text = document.getElementById(`${this.props.src_url}`);
    let image_sourced = document.getElementById(`${this.props.src_url}A`);
    // let image_sourced = document.getElementsByClassName("button_image");

    if (!footer_player.paused && footer_player.src === trackbox_text.id) {
      // trackbox_text.innerHTML = "pause!";
      image_sourced.src = require("../../../src/pausebuttonpng.png");
    }
  }

  render() {
    let userLink = null;
    if (this.props.track) {
      userLink = this.props.track.user;
    }

    // let commentMarkers;

    // this.props.fetchComments();

    // commentMarkers = this.props.comments
    let markers = [];

    if (this.props.comments) {
      this.props.comments.forEach(comment => {
        if (comment.timestamp !== 0 && comment.timestamp !== "" && comment.timestamp !== null && comment.timestamp !== undefined) {
          markers.push(<div key={`${comment.id}`} className="comment-marker" style={{ height: 25, width: 3, marginLeft: comment.timestamp * 550 }}></div>)
        }
      })
    };
    // key={`${track._id}`}

    // iterate through comments; set object key to comment.timestamp, value to count of comments; use value to
    // generate rgb color shade to assign to div background-color 

// "height: 30px;, width: 30px; border: 1px solid black"
      

      
    return (
      <div className="outer-trackbox">
        <div className="inner-trackbox">
          <div className="img_container" onClick={this.handleShow}>
            <img className="img-content" src={this.props.img_src_url}></img>
          </div>
          <div className="artist">
            <Link to={`/user/${userLink}`}>{this.props.username}</Link>
          </div>
          <div className="ticker-wrap" onClick={this.handleShow}>
            <div className="ticker">
              <div className="trackname">{this.props.trackname}</div>
            </div>
          </div>
          <figure>
            <button
              className="play-button"
              id={this.props.src_url}
              onClick={this.handleClick}
              // style={{ height: "10%" }}
            >
              <img id={`${this.props.src_url}A`} src={require("../../../src/playbuttonpng.png")}></img>
              
            </button>
            <div className="progress-container">
              {markers}
              <progress
                className={this.props.src_url}
                value="0"
                max="1"
              ></progress>
            </div>
          </figure>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackBox);
