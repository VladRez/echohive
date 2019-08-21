import React from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { footer: "" };
      this.play = this.play.bind(this);
      this.pause = this.pause.bind(this);
  }
   
    play() {
        // debugger;
      let footer_player;
      footer_player = document.getElementById("footer_player");
      let trackbox_text = document.getElementById(`${this.props.footer.track.src_url}`);
        // debugger;
    //   if (footer_player.playing) {
        // debugger;
          trackbox_text.innerHTML = "pause!";
    //   } else {
    //       trackbox_text.innerHTML = "play!";
    //   }
        
        // console.log('yoyoyo');
    }

    pause() {
      let footer_player;
      footer_player = document.getElementById("footer_player");
      let trackbox_text = document.getElementById(`${this.props.footer.track.src_url}`);
        
      trackbox_text.innerHTML = "play!";

    }

        // footer_player.addEventListener("playing", console.log('hello'));

  render() {
    //   debugger;
      return (
      <div>
          
          <audio controls id="footer_player" src={this.props.footer.track.src_url} onPlay={this.play} onPause={this.pause} />
          {/* <progress id="seekbar" value="0" max="1" style="width:400px;"></progress> */}
        {/* <button id="footer_text" onClick={this.handleClick}>
          play!
        </button> */}
              
              {/* <audio controls> */}
                  {/* <source src={this.props.footer.track.src_url}></source> */}
            {/* </audio> */}
      </div>
    );
  }
}

export default Footer;
