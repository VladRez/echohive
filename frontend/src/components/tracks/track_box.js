import React from 'react';
import { Link } from 'react-router-dom';

class TrackBox extends React.Component {
    render() {
        return (
            <div className="outer-trackbox">
                <div className="inner-trackbox">
                    <div className="img_container"></div>
                    <div className="artist"><Link to={`/user/${this.props.track.user}`}>Put artist name here</Link>
                        <div className="time-ago">Time ago uploaded</div>
                    </div>

                    <div className="trackname"><Link to={`/tracks/${this.props.id}`}>{this.props.trackname}</Link>
                        <button className="genre"># Genre</button>
                    </div>
                    <h3>{this.props.src_url}</h3>
                    
                    <figure>
                        <figcaption>Listen some echoes:</figcaption>
                        <audio controls>
                            <source src={this.props.src_url} type="audio/mpeg"></source>
                        </audio>
                    </figure>
                </div>
            </div>
        );
    }
}


export default TrackBox;

{/* <Link to={`/newquestion`}>Ask Question</Link> */}