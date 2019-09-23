import React from "react";
import { withRouter } from "react-router-dom";
import TrackBox from "./track_box";
import CommentBox from "../comments/comment_box";
import "./track_show.scss";

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser,
      username: this.props.username,
      body: "",
      track: this.props.match.params.trackId,
      timestamp: 0

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    const trackId = this.props.match.params.trackId;
    this.props.fetchSingleTrack(trackId);
    this.props.fetchComments(trackId);
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();

      let progress_bar = document.getElementsByClassName(
          `${this.props.nav_player.track.src_url}`
      )[0];
    
        if (progress_bar !== undefined) {
          let footer_player;
          footer_player = document.getElementById("footer_player");
          if (footer_player.duration) {
            // debugger;
            this.setState({
              timestamp: footer_player.currentTime / footer_player.duration
            }, () => {
                debugger;
                this.props.postComment(this.state);

                    this.setState({
                      user: this.props.currentUser,
                      username: this.props.username,
                      body: "",
                      track: this.props.match.params.trackId
                    });
            });
             
          }
        } else {
          this.props.postComment(this.state);

              this.setState({
                user: this.props.currentUser,
                username: this.props.username,
                body: "",
                track: this.props.match.params.trackId
              });
        }
    
    
    // this.props.postComment(this.state);

    // this.setState({
    //   user: this.props.currentUser,
    //   username: this.props.username,
    //   body: "",
    //   track: this.props.match.params.trackId
    // });
  }

  handleUpdate(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  render() {
    let comments = [];
    if (!this.props.track || !this.props.tracks || !this.props.track.src_url)
      return null;
    if (this.props.comments) {
      comments = this.props.comments.map((comment, i) => {
        return (
          <CommentBox
            key={i}
            body={comment.body}
            user={comment.user}
            track_id={comment.track}
            username={comment.username}
          />
        );
      });
    }
    debugger;
        // let progress_bar;
        
        // progress_bar = document.getElementsByClassName(
        //   `${this.props.nav_player.track.src_url}`
        // )[0];
        // // console.log(progress_bar.labels);
        // if (progress_bar !== undefined) {
        //   let footer_player;
        //   footer_player = document.getElementById("footer_player");
        //   if (footer_player.duration) {
        //     progress_bar.value =
        //       footer_player.currentTime / footer_player.duration;
        //   }
        // }
    // if (progress_bar) {
    //   console.log("woohoo", progress_bar.value);
    // }
    return (
      
      <div className="outer-trackshow">
        <div className="track-title">{this.props.track.trackname}</div>

        <div className="trackshow-container">
          <div>
            <TrackBox
              trackname={this.props.track.trackname}
              src_url={this.props.track.src_url}
              img_src_url={this.props.track.img_src_url}
              id={`${this.props.track._id}`}
              track={this.props.track}
              comments={this.props.comments}
              fetchSingleTrack={this.props.fetchSingleTrack}
              fetchComments={this.props.fetchComments}
              fetchNavTrack={this.props.fetchNavTrack}
            />
            <div className="logo-for-button" />
            <div className="outer-comment">
              <div className="show-comment-container">
                <ul>{comments}</ul>
              </div>
              <form className="show-comment-form" onSubmit={this.handleSubmit}>
                <h2>comment:</h2>
                <textarea
                  // style={{fontSize: 18px}}
                  className="show-textarea"
                  placeholder="Add a Comment:"
                  onChange={this.handleUpdate("body")}
                  value={this.state.body}
                ></textarea>
                <input className="sub-button" type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackShow);
