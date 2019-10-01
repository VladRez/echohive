import React from "react";
import { withRouter } from "react-router-dom";
import "./user_profile.css";
import "./user_profile.scss";
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
    if (!this.props.user || !this.props.tracks) return null;
    let username = this.props.user ? this.props.user.username : "";
    let userTracks = [];
    if (this.props.tracks.length > 0) {
      userTracks = this.props.tracks.map((track, i) => (
        <div key={i}>
          <TrackBox
            trackname={track.trackname}
            src_url={track.src_url}
            img_src_url={track.img_src_url}
            id={`${track._id}`}
            user={track.user}
            fetchSingleTrack={this.props.fetchSingleTrack}
            fetchNavTrack={this.props.fetchNavTrack}
            username={track.username}
          />
        </div>
      ));
    }
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
            <h2>All User Tracks</h2>
            <ul>{userTracks}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
