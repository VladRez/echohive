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
      // let sliceIdx = 19 + reader1.result.split("/")[1].split(";")[0].length;
      // let jabberwocky = reader1.result.slice(sliceIdx);
      // let contentType = jabberwocky.split(";")[0].slice(5);

      let sliceIdx = 19 + reader1.result.split("/")[1].split(";")[0].length;
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
      <div className="main-upload">
        <div className="inner-main">
          <div className="upload-background"></div>
          <div className="upload-chooser-container">
            <div className="upload-main-container sc-border-light g-shadow-light">
              <div className="upload-main-quotaMeter">
                <div className="quotaMeter sc-font">
                  <div className="quotaMeter-uploadlimit">
                    <div className="quotaMeter-limit">
                      "Upload limit: "
                      <span className="quotaMeter_limitMinutes">
                        <strong>0min</strong>" of 180min"
                      </span>
                    </div>
                    <div classsName="quotaMeter-percentage">0%</div>
                  </div>
                  <div className="quotaMeter-background sc-background-dark">
                    <div className="quotaMeter-minutesUsed"></div>
                  </div>
                  <div>
                    <a href="" className="quotaMeter-link">
                      Upgrade Now
                    </a>
                    " to get unlimited uploads."
                  </div>
                </div>
              </div>
              <div className="uploadMain-content">
                <form onSubmit={this.handleSubmit}>
                  <h1 className="uploadMain-title sc-type-light">
                    upload your tracks & cover art
                  </h1>
                  <div className="uploadMain-chooser">
                    <div className="chooseFiles">
                      {/* <div className="upload-elements"> */}

                      <input
                        className="title-text-area "
                        type="textarea"
                        value={this.state.trackname}
                        onChange={this.updateTrackname()}
                        placeholder="Title your echo..."
                      />

                      <div className="outer-input-div">
                        Audio File{"     "}
                        <input
                          className="inputfile aud"
                          id="file-selector"
                          type="file"
                          onChange={this.handleFile}
                        />
                      </div>
                      {/* <br /> */}
                      <div className="outer-input-div">
                        Cover Art{"     "}
                        <input
                          className="inputfile img"
                          id="file-selector-img"
                          type="file"
                          onChange={this.handleImageFile}
                        />
                      </div>
                      {/* <input className="submit-button" type="submit" value="Submit" /> */}
                      <button
                        type="Submit"
                        className="choose-files-button sc-button sc-button-cta sc-button-large"
                        // value="Submit"
                      >
                        Upload Files
                      </button>
                      {/* </div> */}
                    </div>
                    <div className="uploadMain-additional"></div>
                  </div>
                  <aside className="upLoadMain-hqNote">
                    " Provide FLAC, WAV, ALAC or AIFF for best audio quality "
                    <a href="">Learn more about high quality audio (HQ).</a>
                  </aside>
                  <div className="uploadMain-proContainer sc-border-light-top"></div>
                </form>
              </div>
            </div>
          </div>
          <div className="uploadMain-foot sc-clearfix">
            <p className="uploadMain-notice">
              " By uploading, you confirm that your sounds comply with our "
              <a href="">Terms of Use</a>" and you don't infringe on anyone
              else's rights. "
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackCompose;
