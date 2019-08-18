import React from 'react';
import { withRouter } from 'react-router-dom';
import TrackBox from './track_box';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state.comments = "";
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchSingleTrack(this.props.match.params.trackId);
        this.props.fetchComments();        
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
        if (this.props.comments) {
            debugger
            const filteredComments = this.props.comments.filter(com => com._id === this.props.match.params.trackId)
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
                <div><ul>{this.props.comments}</ul></div>
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