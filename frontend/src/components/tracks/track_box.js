import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../nav/footer';

class TrackBox extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.fetchSingleTrack(this.props.id).then(() => {

        // debugger;
        let footer_player;
        footer_player = document.getElementById('footer_player');
        let trackbox_text = document.getElementById(`${this.props.src_url}`);

        if (footer_player.paused) {
            footer_player.play();
            trackbox_text.innerHTML = 'pause!';
        } else {
            footer_player.pause();
            // trackbox_text.innerHTML = "play!";
        }
            
        } )

    }

    componentDidMount() {
        let footer_player;
        footer_player = document.getElementById(
            "footer_player"
        );
        let trackbox_text = document.getElementById(
            `${this.props.src_url}`
        );
        if (!footer_player.paused) {
            trackbox_text.innerHTML = "pause!";

        }
    }
    
    render() {

        return (
            <div className="outer-trackbox">
                
                <div className="inner-trackbox">
                    <div className="img_container"></div>
                    <div className="artist"><Link to={`/user/${this.props.user}`}>Put artist name here</Link>
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

                        {/* <audio src={this.props.src_url}></audio> */}
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

export default TrackBox;

{/* <Link to={`/newquestion`}>Ask Question</Link> */}