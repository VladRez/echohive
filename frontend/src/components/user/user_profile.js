import React from 'react';
import { withRouter } from 'react-router-dom';
import Track from '../tracks/tracks';

import TrackBox from '../tracks/track_box';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUserTracks(this.props.match.params.userId);
    }


    render() {
        // debugger;
        // if (!this.props.track) return null;
        //     return (
        //         <div>No tracks</div>
        //     );
        // } 
        // debugger;
        // debugger;
        // if (this.state === null) return null;

        // if (!this.props.tracks) return null;
        // debugger;
        return (
            
            <div>

                {/* <Track tracks={this.props.tracks} /> */}
                <div>
                    <h2>All User Tracks</h2>
                    {this.props.tracks.map(track => (

                        <div key={`${track._id}`}>
                            <TrackBox
                                trackname={track.trackname}
                                src_url={track.src_url}
                                id={`${track._id}`}

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


            </div>
        );

    }
}

export default withRouter(UserProfile);