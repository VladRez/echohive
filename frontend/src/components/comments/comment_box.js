import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <h3>{this.props.body}</h3>
        </div>
    );
  }
}

export default CommentBox;