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
      track: this.props.match.params.trackId
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
    e.preventDefault();
    this.props.postComment(this.state);

    this.setState({
      user: this.props.currentUser,
      username: this.props.username,
      body: "",
      track: this.props.match.params.trackId
    });
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
