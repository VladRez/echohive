import React from 'react';
import { withRouter } from 'react-router-dom';
import TrackBox from './track_box';

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        }
    }

    componentWillMount() {
        this.props.fetchTracks();
    }

    componentWillReceiveProps(newState) {
        this.setState({ tracks: newState.tracks });
    }

    render() {
        if (this.state.tracks.length === 0) {
            return (<div>There are no Tracks</div>)
        } else {
            return (
                <div>
                    <h2>All Tracks</h2>
                    {this.state.tracks.map(track => (
                        <TrackBox key={track._id}
                            trackname={track.trackname}
                            url_source={track.url_source}
                        />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Track);