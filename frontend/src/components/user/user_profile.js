import React from "react";
import { withRouter } from "react-router-dom";
import TrackBox from "../tracks/track_box";
import "./user_profile.scss";

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchUserTracks(this.props.match.params.userId);
  }

  render() {

    if (!this.props.username) return null;
    let rendered_tracks;

    renderedTracks = this.props.tracks.map(track => {
      return (
        <div key={`${track._id}`}>
          <TrackBox
            trackname={track.trackname}
            username={track.username}
            src_url={track.src_url}
            id={`${track._id}`}
            track={track}
            fetchSingleTrack={this.props.fetchSingleTrack}
            fetchNavTrack={this.props.fetchNavTrack}
          />
        </div>
      );
    });

    return (
      <div>
        <div>
          <h2>All User Tracks</h2>
          {/* {this.props.tracks.map(track => (
                <div key={`${track._id}`}>
                  <TrackBox
                    trackname={track.trackname}
                    src_url={track.src_url}
                    id={`${track._id}`}
                    fetchSingleTrack={this.props.fetchSingleTrack}
                  />
                  <figure>
                    <figcaption>Listen some echoes:</figcaption>
                    <audio controls>
                      <source src={track.src_url} type="audio/mpeg" />
                    </audio>
                  </figure>
                </div>
              ))} */}
          <div>{renderedTracks}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
