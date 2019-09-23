import React from "react";
import "./track_compose.css";

class TrackCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trackname: "",
      user: this.props.currentUser.id,
      src_url: "",
      img_src_url: "",
      newTrack: "",
      audioFile: "",
      imageFile: ""
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
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

  handleImageFile(e) {
    const reader1 = new FileReader();
    let file = e.currentTarget.files[0];
    reader1.onloadend = res => {
      let sliceIdx = 19 + (reader1.result.split("/")[1].split(";")[0].length)
      let jabberwocky = reader1.result.slice(sliceIdx);
      let contentType = reader1.result.split(";")[0].slice(5);
      let byteChars = atob(jabberwocky);
      let byteNums = new Array(byteChars.length);

      for (let i = 0; i < byteChars.length; i++) {
        byteNums[i] = byteChars.charCodeAt(i);
      }

      let byteArray = new Uint8Array(byteNums);
      let blob = new Blob([byteArray], { type: contentType });

      this.setState({ img_src_url: blob, imageFile: file });
    };

    if (file) {
      reader1.readAsDataURL(file);
    } else {
      this.setState({ img_src_url: "", imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("trackname", this.state.trackname);
    if (this.state.audioFile) {
      formData.append("track", this.state.audioFile);
    }
    if (this.state.imageFile) {
      formData.append("image", this.state.imageFile);
    }
    debugger;
    this.props.postTrack(formData, this.state.trackname, this.state.user);
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
                <br></br>
                <input
                  className="inputfile"
                  id="file-selector-img"
                  type="file"
                  onChange={this.handleImageFile}
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
