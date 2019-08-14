import React from 'react';
import { withRouter } from 'react-router-dom';
import TrackBox from './track_box';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchSingleTrack(this.props.match.params.trackId);
    }


    render() {
        // debugger;
        if (!this.props.track) return null;
        //     return (
        //         <div>No tracks</div>
        //     );
        // } 
        // debugger;
        // debugger;
        // if (this.state === null) return null;

        return (
            <div>
                {/* <h2>This Track</h2>
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
                ))} */}

                <h2>This Track</h2>

                <h2>{this.props.track.trackname}</h2>

            </div>
        );

    }
}

export default withRouter(TrackShow);