import React from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { footer: "" };
  }

  //   handleClick() {
  //     // e.preventDefault();
  //     let player;
  //     player = document.getElementById("player");
  //     let footer_audio = document.getElementById("audioControl");
  //     let trackbox_audio = document.getElementById(`${this.props.src_url}`);
  //     // `${this.props.src_url}`;
  //     let nav_player;
  //     nav_player = document.getElementById("nav_player");

  //     if (player.paused) {
  //       // this.setState({ footer: this.props.src_url });
  //       // debugger;
  //       player.play();
  //       // nav_player.play();
  //       // debugger;
  //       footer_audio.innerHTML = "pause!";
  //       trackbox_audio.innerHTML = "pause!";
  //     } else {
  //       player.pause();
  //       // nav_player.pause();
  //       footer_audio.innerHTML = "play!";
  //       trackbox_audio.innerHTML = "play!";
  //     }

  //   }

//   componentDidUpdate() {
//     //   this.setState({ footer: this.props.footer.src_url });
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({ footer: nextProps.footer });
//   }

    addEventHandler() {
        

    }


  render() {
    //   if (!this.props.footer) return null;
    //   debugger;
      return (
      <div>
          
        <audio controls id="player" src={this.props.footer.track.src_url} />
        <button id="audioControl" onClick={this.handleClick}>
          play!
        </button>
              
              {/* <audio controls> */}
                  {/* <source src={this.props.footer.track.src_url}></source> */}
            {/* </audio> */}

        {/* <div>
                            <button onClick={() => document.getElementById('nav_player').play()}>Play</button>
                            <button onClick={() => document.getElementById('nav_player').pause()}>Pause</button>
                            <button onClick={() => document.getElementById('nav_player').volume += 0.1}>Vol +</button>
                            <button onClick={() => document.getElementById('nav_player').volume -= 0.1}>Vol -</button>
                        </div> */}
      </div>
    );
  }
}

export default Footer;
