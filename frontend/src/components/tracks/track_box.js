import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../nav/footer';

class TrackBox extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    // componentDidUpdate() {
    //     this.setState({ footer: this.props.src_url });
    // }

    handleClick() {
        // e.preventDefault();
        this.props.fetchSingleTrack(this.props.id).then(() => {

        // debugger;
        // this.setState({ footer: this.props.src_url });
        let player;
        player = document.getElementById('player');
        // debugger;
        let footer_audio = document.getElementById("audioControl");
        let trackbox_audio = document.getElementById(`${this.props.src_url}`);
// `${this.props.src_url}`;
        let nav_player;
        nav_player = document.getElementById("nav_player");

        if (player.paused) {
            // this.setState({ footer: this.props.src_url });
            // debugger;
            player.play();
            // nav_player.play();
            // debugger;
            footer_audio.innerHTML = 'pause!';
            trackbox_audio.innerHTML = 'pause!';
        } else {
            player.pause();
            // nav_player.pause();
            footer_audio.innerHTML = "play!";
            trackbox_audio.innerHTML = "play!";
        }
        } )

        // let ctrl;
        // ctrl = document.getElementById('audioControl');

        // let pause = ctrl.innerHTML === 'pause!';
        // ctrl.innerHTML = pause ? 'play!' : 'pause!';

        // // Update the Audio
        // let method = pause ? 'pause' : 'play';
        // player[method]();

    }

    render() {

        // <audio id="yourAudio" preload='none'>
        //     <source src='the url to the audio' type='audio/wav' />
        // </audio>
        //     <a href="#" id="audioControl">play!</a>
    
        // let yourAudio;
        // yourAudio = document.getElementById('player')
    

        // ctrl.onclick = function () {

        //     // Update the Button
        //     var pause = ctrl.innerHTML === 'pause!';
        //     ctrl.innerHTML = pause ? 'play!' : 'pause!';

        //     // Update the Audio
        //     var method = pause ? 'pause' : 'play';
        //     yourAudio[method]();

        //     // Prevent Default Action
        //     return false;
        // };


        return (
            <div className="outer-trackbox">
                
                <div className="inner-trackbox">
                    <div className="img_container"></div>
                    <div className="artist"><Link to={`/user/${this.props.track.user}`}>Put artist name here</Link>
                        <div className="time-ago">Time ago uploaded</div>
                    </div>

                    <div className="trackname"><Link to={`/tracks/${this.props.id}`}>{this.props.trackname}</Link>
                        <button className="genre"># Genre</button>
                    </div>
                    
                    <figure>
                        {/* <figcaption>Listen some echoes:</figcaption>
                        <audio controls>
                            <source src={this.props.src_url} type="audio/mpeg"></source>
                        </audio> */}

                        <audio src={this.props.src_url}></audio>
                        <button id={this.props.src_url} onClick={this.handleClick}>play!</button>

                        
                        {/* <div className="comment-box">
                            
                        </div> */}
                        
                        {/* <div>
                            <button onClick={() => document.getElementById('player').play()}>Play</button>
                            <button onClick={() => document.getElementById('player').pause()}>Pause</button>
                            <button onClick={() => document.getElementById('player').volume += 0.1}>Vol +</button>
                            <button onClick={() => document.getElementById('player').volume -= 0.1}>Vol -</button>
                        </div> */}

                    </figure>

                    
                </div>
            </div>
        );
    }
}



// ctrl.onclick = function () {

//     // Update the Button
//     var pause = ctrl.innerHTML === 'pause!';
//     ctrl.innerHTML = pause ? 'play!' : 'pause!';

//     // Update the Audio
//     var method = pause ? 'pause' : 'play';
//     yourAudio[method]();

//     // Prevent Default Action
//     return false;
// };

export default TrackBox;

{/* <Link to={`/newquestion`}>Ask Question</Link> */}