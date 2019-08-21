import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../nav/footer';

class TrackBox extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // debugger;
        this.props.fetchSingleTrack(this.props.id).then(() => {

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
            
        } )
    }

    componentDidMount() {
        // debugger;
        let footer_player;
        footer_player = document.getElementById(
            "footer_player"
        );
        let trackbox_text = document.getElementById(
            `${this.props.src_url}`
        );
        if (!footer_player.paused && (footer_player.src === trackbox_text.id)) {
            trackbox_text.innerHTML = "pause!";

        } //else {
        //     trackbox_text.innerHTML = "play!";
        // }
    }

    // componentDidUpdate() {
    //             let footer_player;
    //     footer_player = document.getElementById(
    //         "footer_player"
    //     );
    //     let trackbox_text = document.getElementById(
    //         `${this.props.src_url}`
    //     );
    //     if (!footer_player.paused && (footer_player.src === trackbox_text.id)) {
    //         trackbox_text.innerHTML = "pause!";

    //     } else {
    //         trackbox_text.innerHTML = "play!";
    //     }
    // }
    
    render() {

        // let inner;
        // let trackbox_text;
        // let footer_player;

        // footer_player = document.getElementById("footer_player");
        // trackbox_text = document.getElementById(`${this.props.src_url}`);

        // if (!footer_player.paused) {
        //     trackbox_text.innerHTML = "pause!";
        // }
        // debugger;
        return (
            <div className="outer-trackbox">
                
                <div className="inner-trackbox">
                    <div className="img_container"></div>
                    <div className="artist"><Link to={`/user/${this.props.user}`}>Put artist name here</Link>
                        <div className="time-ago">Uploaded</div>
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
                        <button className="play-button" id={this.props.src_url} onClick={this.handleClick}>play!</button>
                        <progress className={this.props.src_url} value="0" max="1"></progress>
                        
                        {/* <div className="comment-box">
                            
                        </div> */}

                    </figure>

                    
                </div>
            </div>
        );
    }
}

export default TrackBox;

{/* <Link to={`/newquestion`}>Ask Question</Link> */}