import React from 'react';
import { withRouter } from 'react-router-dom';
import TrackBox from './track_box';

class Track extends React.Component {
    constructor(props) {
        super(props);

    }



    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {
        // debugger;
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
        
            return (
                <div>
                    <h2>All Tracks</h2>
                    {this.props.tracks.map(track => (

                        <div>
                        <TrackBox key={track._id}
                            trackname={track.trackname}
                            src_url={track.src_url}
                        />

                        <figure>
                            <figcaption>Listen some echoes:</figcaption>
                            <audio controls>
                                <source src={track.src_url} type="audio/mpeg"></source>
                            </audio>
                        </figure>
                        </div>
                    ))}


                </div>
            );
        
    }
}



export default withRouter(Track);