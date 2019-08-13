import React from 'react';
import { withRouter } from 'react-router-dom';
import TrackBox from './track_box';

class Track extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     tracks: []
        // }
    }

    // componentWillMount() {
    //     this.props.fetchTracks();
    // }

    // componentWillReceiveProps(newState) {
    //     this.setState({ tracks: newState.tracks });
    // }

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
        
            return (
                <div>
                    <h2>All Tracks</h2>
                    {this.props.tracks.map(track => (
                        <TrackBox key={track._id}
                            trackname={track.trackname}
                            src_url={track.src_url}
                        />
                    ))}
                </div>
            );
        
    }
}



export default withRouter(Track);