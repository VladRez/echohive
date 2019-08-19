import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './comment_box.scss';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="comment-box-container">
          <h1 className="quotes">"</h1>
          <h3 className="comment">{this.props.body}</h3>
          <h1 className="quotes">"</h1>
          <br />
          <div className="dash">— </div><div className="username">{this.props.username}</div>
        </div>
    );
  }
}

export default CommentBox;