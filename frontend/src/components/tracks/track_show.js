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
        // ;
        if (!this.props.track || !this.props.tracks || !this.props.track.src_url) return null;
        // if (!this.props.tracks) return null;


        return (
            <div>
                <h2>{this.props.track.trackname}</h2>

                <figure>
                    <figcaption>Listen some echoes:</figcaption>
                    <audio controls>
                        <source src={this.props.track.src_url} type="audio/mpeg"></source>
                    </audio>
                </figure>

            </div>
        );

    }
}

export default withRouter(TrackShow);