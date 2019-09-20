import React from "react";
import { Link } from "react-router-dom";
import TrackComposeContainer from './track_compose_container';

// import Footer from '../nav/footer';

class TrackBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
        // debugger;
        this.props.fetchNavTrack(this.props.id).then(() => {

        // debugger;
            let footer_player;
            footer_player = document.getElementById('footer_player');
            
        let trackbox_text = document.getElementById(`${this.props.src_url}`);

        if (footer_player.paused) {
            footer_player.play();
            Array.from(document.getElementsByClassName("play-button")).forEach(ele => {
                ele.innerHTML = 'play';
            })
            trackbox_text.innerHTML = 'pause!';
        } else {
            footer_player.pause();
            Array.from(document.getElementsByClassName("play-button")).forEach(ele => {
                ele.innerHTML = 'play';
            })
        }
            
        })
        if (this.props.fetchComments) {
            this.props.fetchComments(this.props.id)
        }

            if (this.props.fetchComments) {
      this.props.fetchComments(this.props.id);
    }
    }
    



  componentDidMount() {
    let footer_player;
    footer_player = document.getElementById("footer_player");
    let trackbox_text = document.getElementById(`${this.props.src_url}`);
    if (!footer_player.paused && footer_player.src === trackbox_text.id) {
      trackbox_text.innerHTML = "pause!";
    } //else {

  }


  render() {

    let userLink = null;
    if (this.props.track) {
      userLink = this.props.track.user;
    }
    return (
      <div className="outer-trackbox">
        <div className="inner-trackbox">
          {/* <image src={this.props.img_src_url}>BOOM</image> */}
          <div className="img_container" />
          <div className="artist">
            <Link to={`/user/${userLink}`}>Profile</Link>
            <div className="time-ago">Uploaded</div>
          </div>

          <div className="trackname">
            <Link to={`/track/${this.props.id}`}>{this.props.trackname}</Link>
            <button className="genre"># Genre</button>
          </div>

          <figure>

            <button
              className="play-button"
              id={this.props.src_url}
              onClick={this.handleClick}
            >
              play!
            </button>
            <progress className={this.props.src_url} value="0" max="1" />

            {/* <div className="comment-box">
                            
                        </div> */}
          </figure>
        </div>
        <img src={this.props.img_src_url} height="200" width="200"></img>
      </div>
    );
  }
}


export default TrackBox;
