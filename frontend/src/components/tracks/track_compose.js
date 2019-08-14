import React from 'react';
import TrackBox from './track_box';

class TrackCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trackname: "",
            src_url: "",
            newTrack: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newTrack: nextProps.newTrack.trackname });
    }

    handleSubmit(e) {
        e.preventDefault();
        let track = {
            trackname: this.state.trackname,
            src_url: this.state.src_url
        };

        this.props.postTrack(track);
        this.setState({ trackname: '', src_url: '' })
    }

    updateTrackname() {
        return e => this.setState({
            trackname: e.currentTarget.value
        });
    }

    updateUrl() {
        return e => this.setState({
            src_url: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea"
                            value={this.state.trackname}
                            onChange={this.updateTrackname()}
                            placeholder="Submit your track..."
                        />

                        <input type="textarea"
                            value={this.state.src_url}
                            onChange={this.updateUrl()}
                            placeholder="url goes here"
                        />

                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                <TrackBox trackname={this.state.newTrack} />
                
            </div>
        )
    }
}

export default TrackCompose;