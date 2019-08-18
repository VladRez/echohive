import React from 'react';
import { withRouter } from 'react-router-dom';
import TrackBox from './track_box';
import CommentBox from '../comments/comment_box';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state.comments = "";
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        const trackId = this.props.match.params.trackId
        this.props.fetchSingleTrack(trackId);
        this.props.fetchComments(trackId);        
    }
    handleSubmit(e) {
        let comment = {
            user: this.props.track.user,
            body: this.state.body,
            track: this.props.match.params.trackId
        }
        this.props.postComment(comment);

    }
    
      handleUpdate(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }
    render() {
        if (!this.props.track || !this.props.tracks || !this.props.track.src_url) return null;
        let filteredComments = null;
        if (this.props.comments) {
            filteredComments = this.props.comments.comments.filter(com => com.track === this.props.match.params.trackId)
            
           filteredComments = filteredComments.map((comment, i) => (
                <CommentBox 
                key={i}
                body={comment.body}
                user={comment.user}
                track_id={comment.track}
                />
            ))
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
                <div><ul>{filteredComments}</ul></div>
                <div className="show-comment-container">
                    <h2>comment:</h2>
            
                    <form className="show-comment-form" onSubmit={this.handleSubmit}>
                        <textarea className="show-textarea" placeholder="Add a Comment:" onChange={this.handleUpdate('body')}></textarea>
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        );

    }
}

export default withRouter(TrackShow);