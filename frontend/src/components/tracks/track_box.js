import React from 'react';
import { Link } from 'react-router-dom';

class TrackBox extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // e.preventDefault();
        let player;
        player = document.getElementById('player');
        let b = document.getElementById('audioControl');

        if (player.paused) {
            player.play();
            // debugger;
            b.innerHTML = 'pause!';
        } else {
            player.pause();
            b.innerHTML = 'play!';
        }
        

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
                        <figcaption>Listen some echoes:</figcaption>
                        <audio controls>
                            <source src={this.props.src_url} type="audio/mpeg"></source>
                        </audio>

                        <audio id="player" src={this.props.src_url}></audio>
                        <button id="audioControl" onClick={this.handleClick}>play!</button>

                        
                        {/* <div className="comment-box">
                            
                        </div> */}
                        
                        <div>
                            <button onClick={() => document.getElementById('player').play()}>Play</button>
                            <button onClick={() => document.getElementById('player').pause()}>Pause</button>
                            <button onClick={() => document.getElementById('player').volume += 0.1}>Vol +</button>
                            <button onClick={() => document.getElementById('player').volume -= 0.1}>Vol -</button>
                        </div>

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