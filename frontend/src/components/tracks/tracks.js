import React from "react";
import { withRouter } from "react-router-dom";
import TrackBox from "./track_box";
import "./tracks.scss";

class Track extends React.Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    let renderedTracks;

    renderedTracks = this.props.tracks.map(track => {
      return (
        <div key={`${track._id}`}>
          <TrackBox
            trackname={track.trackname}
            src_url={track.src_url}
            img_src_url={track.img_src_url}
            id={`${track._id}`}
            track={track}
            username={track.username}
            fetchSingleTrack={this.props.fetchSingleTrack}
            fetchNavTrack={this.props.fetchNavTrack}
          />
        </div>
      );
    });

    return (
      <div className="body-background">
        <div className="header">All tracks</div>
        <div id="renderedTracks">
        {renderedTracks}
        </div>
      </div>
    );
  }
}

export default withRouter(Track);
