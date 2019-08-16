import React from 'react';
import { Link } from 'react-router-dom';

class TrackBox extends React.Component {
    render() {
        return (
            <div className="trackbox">
                <div className="img_container"></div>
                <div className="artist"><Link to={`/user/${this.props.track.user}`}>PUT ARTIST NAME HERE</Link></div>
                <div className="trackname"><Link to={`/tracks/${this.props.id}`}>{this.props.trackname}</Link></div>
                <h3>{this.props.src_url}</h3>
                

            </div>
        );
    }
}


export default TrackBox;

{/* <Link to={`/newquestion`}>Ask Question</Link> */}