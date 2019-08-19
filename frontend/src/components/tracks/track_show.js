import React from 'react';
import { withRouter } from 'react-router-dom';
import TrackBox from './track_box';
import CommentBox from '../comments/comment_box';
import './track_show.scss';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: this.props.currentUser, 
            username: this.props.username, //added
            body:"", 
            track: this.props.match.params.trackId
                                };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        const trackId = this.props.match.params.trackId
        this.props.fetchSingleTrack(trackId);
        this.props.fetchComments(trackId);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.postComment(this.state);
        
        this.state = { 
        user: this.props.currentUser, 
        username: this.props.username, //added
        body:"", 
        track: this.props.match.params.trackId
};
        this.setState({body: ""});
    }
    
      handleUpdate(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }
    render() {
        let comments = [];
        if (!this.props.track || !this.props.tracks || !this.props.track.src_url) return null;
        if (this.props.comments) {
           comments = this.props.comments.map((comment, i) => {
               return (
                <CommentBox 
                key={i}
                body={comment.body}
                user={comment.user}
                track_id={comment.track}
                username={comment.username}//added
                />
            )
        })
        }
        return (
            <div>
                <h2>{this.props.track.trackname}</h2>

                <figure>
                    <figcaption>echo:</figcaption>
                    <audio controls>
                        <source src={this.props.track.src_url} type="audio/mpeg"></source>
                    </audio>
                </figure>
                <div><ul>{comments}</ul></div>
                <div className="show-comment-container">
                    <h2>comment:</h2>
                    <br />
                    <form className="show-comment-form" onSubmit={this.handleSubmit}>
                        <textarea className="show-textarea" placeholder="Add a Comment:" onChange={this.handleUpdate('body')} value={this.state.body}></textarea>
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        );

    }
}

export default withRouter(TrackShow);