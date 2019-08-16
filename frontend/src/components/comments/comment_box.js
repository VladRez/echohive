import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class CommentBox extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.comment}</h3>
        </div>
    );
  }
}

export default CommentBox;