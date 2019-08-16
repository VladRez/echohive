import React from "react";
import { withRouter } from "react-router-dom";
import "./user_profile.css";
import TracksContainer from "../tracks/tracks_container";
import TrackBox from "../tracks/track_box";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let id = this.props.match.params.userId;
    this.props.fetchUser(id);
    this.props.fetchUserTracks(id);
  }

  render() {
    // debugger;
    // if (!this.props.user || !this.props.tracks) return null;
    let username = this.props.user ? this.props.user.username : "";
    // debugger;
    return (
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="profileHeaderContents">
            <div className="profileUsername">{username}</div>
          </div>
          <div className="profileHeaderBackground">
            <div className="fillBackground">
              <div className="backgroundGradient">
                <div className="fillColor" />
              </div>
            </div>
          </div>
        </div>
        <div className="profileBodyContent">
          <div className="tracksAndUserInfo">
            {/* <TracksContainer /> */}

            <h2>All User Tracks</h2>
                     {this.props.tracks.map(track => (

                        <div key={`${track._id}`}>
                            {/* <TrackBox
                                trackname={track.trackname}
                                src_url={track.src_url}
                                id={`${track._id}`}

                            /> */}

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
      </div>
    );
  }
}

export default withRouter(UserProfile);

















// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import Track from '../tracks/tracks';

// import TrackBox from '../tracks/track_box';

// class UserProfile extends React.Component {
//     constructor(props) {
//         super(props);

//     }

//     componentDidMount() {
//         this.props.fetchUserTracks(this.props.match.params.userId);
//     }


//     render() {
//         // debugger;
//         // if (!this.props.track) return null;
//         //     return (
//         //         <div>No tracks</div>
//         //     );
//         // } 
//         // debugger;
//         // debugger;
//         // if (this.state === null) return null;

//         // if (!this.props.tracks) return null;
//         // debugger;
//         return (

//             <div>

//                 {/* <Track tracks={this.props.tracks} /> */}
//                 <div>
//                     <h2>All User Tracks</h2>
//                     {this.props.tracks.map(track => (

//                         <div key={`${track._id}`}>
//                             <TrackBox
//                                 trackname={track.trackname}
//                                 src_url={track.src_url}
//                                 id={`${track._id}`}

//                             />

//                             <figure>
//                                 <figcaption>Listen some echoes:</figcaption>
//                                 <audio controls>
//                                     <source src={track.src_url} type="audio/mpeg"></source>
//                                 </audio>
//                             </figure>
//                         </div>
//                     ))}


//                 </div>


//             </div>
//         );

//     }
// }

// export default withRouter(UserProfile);