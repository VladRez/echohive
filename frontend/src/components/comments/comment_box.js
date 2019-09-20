import React from "react";
import "./comment_box.scss";

class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-box-container">
        <h1 className="quotes">"</h1>
        <div className="comment">{this.props.body}</div>
        <h1 className="quotes">"</h1>
        <br />
        <div className="username">—{this.props.username}</div>
      </div>
    );
  }
}

export default CommentBox;
