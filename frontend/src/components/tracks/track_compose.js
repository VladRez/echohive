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
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newTrack: nextProps.newTrack.trackname });
    }

    handleFile(e) {
        const reader = new FileReader();
        let file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ src_url: reader.result, audioFile: file });

        if (file) {
           reader.readAsDataURL(file);
        } else {
            this.setState({ src_url: "", audioFile: null });
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('trackname', this.state.trackname);
        if (this.state.audioFile) {

            formData.append('track', this.state.audioFile);
        }

        this.props.postTrack(formData, this.state.trackname, this.props.currentUser.id);
        
    }

    updateTrackname() {
        return e => this.setState({
            trackname: e.currentTarget.value
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
                            <input className="track-input-field" id="file-selector" type="file" onChange={this.handleFile} />

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