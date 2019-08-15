import React from 'react';
import { Link } from 'react-router-dom';

class TrackBox extends React.Component {
    render() {
        return (
            <div>
                
                <h3><Link to={`/tracks/${this.props.id}`}>{this.props.trackname}</Link></h3>
                <h3>{this.props.src_url}</h3>
                

            </div>
        );
    }
}


export default TrackBox;

{/* <Link to={`/newquestion`}>Ask Question</Link> */}