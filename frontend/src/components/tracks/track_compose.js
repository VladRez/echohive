import React from "react";
import "./track_compose.css";

// React.unmountComponentAtNode(<TrackCompose />, TrackCompose)

class TrackCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trackname: "",
      user: this.props.currentUser.id,
      src_url: "",
      newTrack: ""
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.setState({ newTrack: nextProps.newTrack.trackname });
  // }

  componentWillReceiveProps(nextProps) {
    this.setState({ newTrack: nextProps.newTrack.trackname });
  }

  // if (nextProps.getComponent !== this.props.getComponent) {
  //     this.load(nextProps)
  //   }

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
    formData.append("trackname", this.state.trackname);
    if (this.state.audioFile) {
      formData.append("track", this.state.audioFile);
    }
    this.props.postTrack(formData, this.state.trackname, this.state.user);
    //   this.props.currentUser.id
    // )
  }

  updateTrackname() {
    return e =>
      this.setState({
        trackname: e.currentTarget.value
      });
  }

  render() {
    return (
      <div className="outerbox">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="upload-elements">
              <input
                className="title-text-area"
                type="textarea"
                value={this.state.trackname}
                onChange={this.updateTrackname()}
                placeholder="Title your echo..."
              />
              <label className="file">
                <input
                  className="inputfile"
                  id="file-selector"
                  type="file"
                  onChange={this.handleFile}
                />
              </label>
              <br />

              <input className="submit-button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <br />
      </div>
    );
  }
}

export default TrackCompose;
