import React from 'react';
import { withRouter } from 'react-router-dom';
import TrackBox from './track_box';
import './tracks.scss';

class Track extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // if (!this.props.match.params) {
        //     this.props.fetchTracks()
        // } else {
            this.props.fetchTracks()
        // }
    }

    render() {
        // if (this.state.tracks.length === 0) {
        //     return (
        //         <div>No tracks</div>
        //     );
        // } 

        const soundfiles = [
            "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3402+Euclid+Ave.mp3",
            "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3404+Euclid+Ave+2.mp3",
            "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3404+Euclid+Ave+3.mp3",
            "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3402+Euclid+Ave+4.mp3",
            "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3402+Euclid+Ave+5.mp3",
            "https://echo-hive-seeds.s3-us-west-1.amazonaws.com/3402+Euclid+Ave+6.mp3"
        ];

        let renderedTracks;

        renderedTracks = this.props.tracks.map(track => {
            return(
            <div key={`${track._id}`}>
                <TrackBox
                    trackname={track.trackname}
                    src_url={track.src_url}
                    id={`${track._id}`}
                    track={track}
                />

                {/* <figure>
                    <figcaption>Listen some echoes:</figcaption>
                    <audio controls>
                        <source src={track.src_url} type="audio/mpeg"></source>
                    </audio>
                </figure> */}
            </div>
            )}
    );
        



            return (
                <div>

                    <div className="header">All tracks</div>
                    
                    {renderedTracks}

                </div>
            );
        
    }
}



export default withRouter(Track);