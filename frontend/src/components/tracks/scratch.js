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
                                click here to upload your tracks & cover art
                  </h1>
                            <div className="uploadMain-chooser">
                                <div className="chooseFiles">
                                    {/* <div className="upload-elements"> */}
                                    <label className="file">
                                        <input
                                            className="title-text-area "
                                            type="textarea"
                                            value={this.state.trackname}
                                            onChange={this.updateTrackname()}
                                            placeholder="Title your echo..."
                                        />
                                        Select an Audio File
                        <input
                                            className="inputfile "
                                            id="file-selector"
                                            type="file"
                                            onChange={this.handleFile}
                                        />
                                        {/* <br /> */}
                                        Select Cover Art
                        <input
                                            className="inputfile "
                                            id="file-selector-img"
                                            type="file"
                                            onChange={this.handleImageFile}
                                        />
                                    </label>
                                    {/* <input className="submit-button" type="submit" value="Submit" /> */}
                                    <button
                                        type="button"
                                        className="choose-files-button sc-button sc-button-cta sc-button-large"
                                        value="Submit"
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





/* .outerbox {
  /* position: relative; */
/* } */

.main - upload {
    display: block;
}
.inner - main {
    margin: -30px auto 0;
    padding: 30px 0;
    width: 800px;
}
.upload - background {
    width: 800px;
    height: 90px;
    transition: height 0.1s ease -in -out;
    transition - property: height;
    transition - duration: 0.1s;
    transition - timing - function: ease-in -out;
    transition - delay: 0s;
}
.upload - chooser - container {
    /* display: webkit-flex; */
    display: flex;
    flex - direction: column;
    margin: 0 0 5px 0;
    border - radius: 2px;
    background - color: "#fff";
    text - align: center;
    position: relative;
}
sc - font {
    font - family: "Interstate", "Lucida Grande", "Lucida Sans Unicode",
        "Lucida Sans", Garuda, Verdana, Tahoma, sans - serif;
}

.g - shadow - light {
    box - shadow: 0 2px 12px - 5px rgba(0, 0, 0, 0.1);
}
.upload - main - quotaMeter {
    padding: 30px 20px 0 20px;
    justify - content: flex - end;
}
.quotaMeter {
    width: 252px;
    text - align: left;
    font - weight: 300;
}
.quotaMeter - uploadlimit {
    display: flex;
    justify - content: space - between;
}
.quotaMeter - limit {
    max - width: 85 %;
}
.quotaMeter_limitMinutes {
    white - space: nowrap;
}
.quotaMeter - percentage {
    align - self: flex - end;
    background - color: #666666;
}
.quotaMeter - background {
    width: 100 %;
    height: 8px;
    border - radius: 5px;
    display: inline - block;
}
.sc - background - dark {
    background - color: "#e5e5e5";
}
.quotaMeter - minutesUsed {
    height: 100 %;
    border - radius: 5px;
    max - width: 100 %;
    background - color: #666666;
}
a {
    color: "#38d";
    text - decoration: none;
}
.uploadMain - content {
    margin: 100px 0;
    transition: margin 0.3s cubic - bezier(0.175, 0.885, 0.32, 1.275);
}
.sc - type - light {
    font - weight: 100;
}
.uploadMain - title {
    font - size: 22px;
    color: "#333;";
}
.uploadMain - chooser {
    flex - direction: column;
    display: flex;
    margin: 0 0 5px 0;
    border - radius: 2px;
    background - color: "#fff";
    text - align: center;
    position: relative;
}
.chooseFiles {
    text - align: center;
}
.sc - visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
.sc - visuallyhidden: hover {
    border: 1px;
    clip: rect(0 0 0 0);
    height: 15px;
    position: absolute;
    width: 60px;
}
.sc - button {
    display: inline - block;
    position: relative;
    height: 26px;
    margin: 0;
    padding: 2px 11px 2px 10px;
    border: 1px solid #e5e5e5;
    border - radius: 3px;
    background - color: #fff;
    cursor: pointer;
    color: #333;
    font - size: 14px;
    line - height: 20px;
    white - space: nowrap;
    font - family: "Interstate", "Lucida Grande", "Lucida Sans Unicode",
        "Lucida Sans", Garuda, Verdana, Tahoma, sans - serif;
    font - weight: 100;
    text - align: center;
    vertical - align: baseline;
    -webkit - user - select: none;
    -moz - user - select: none;
    -ms - user - select: none;
    box - sizing: border - box;
}
.sc - button - large {
    font - size: 16px;
    line - height: 18px;
    padding: 10px 15px;
    height: 40px;
    min - width: 300px;
}
.sc - button - cta,
.sc - button - cta: hover,
.sc - button - cta: focus,
.sc - button - cta: visited,
.sc - button.sc - button - white: hover,
.sc - button.sc - button - white: focus {
    background - color: #f50;
    border - color: #f50;
    color: #fff;
}

/* .form-container form {
  display: flex;
  justify-content: space-evenly;
  height: 800px;
  text-align: center;
  /* background: url(../../ehlogo.png) no-repeat 120px 110px; */
/* } */

/* .upload-elements {
  margin-top: 300px;
  flex-direction: column;
  display: flex;
}
.title-text-area { */
/* border-color: #8a8a8a;
  border-width: 1px;
  font-weight: 200px;
  font-size: 26px;
  flex-direction: column;
  width: 180px;
} */
/* .inputfile {
  overflow: hidden;
  /* position: absolute; */
/* z-index: 1; */
/* } */
* /

    /* .inputfile + label {
      font-weight: 200;
    
      background-color: black;
      display: inline-block;
    } */

    /* .inputfile:focus + label,
    .inputfile + label:hover {
      background-color: #629cff;
    }
    .inputfile:focus + label {
      outline: 1px dotted #000;
      outline: -webkit-focus-ring-color auto 5px;
    } */
    .submit - button {
    position: center;
    background - color: #629cff;
    border - color: #8a8a8a;
    border - radius: 25px;
    font - size: 16px;
    line - height: 18px;
    /* padding: 10px 15px; */
    height: 30px;
    width: 100px;
}
.submit - button {
    margin - top: 1px;
    -moz - box - shadow: 0px 10px 14px - 7px #2b49c2;
    -webkit - box - shadow: 0px 10px 14px - 7px #2b49c2;
    box - shadow: 0px 10px 14px - 7px #2b49c2;
    background: -webkit - gradient(
        linear,
        left top,
        left bottom,
        color - stop(0.05, #266fed),
        color - stop(1, #5792ff)
    );
    background: -moz - linear - gradient(top, #266fed 5 %, #5792ff 100 %);
    background: -webkit - linear - gradient(top, #266fed 5 %, #5792ff 100 %);
    background: -o - linear - gradient(top, #266fed 5 %, #5792ff 100 %);
    background: -ms - linear - gradient(top, #266fed 5 %, #5792ff 100 %);
    background: linear - gradient(to bottom, #266fed 5 %, #5792ff 100 %);
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#266fed', endColorstr = '#5792ff', GradientType = 0);
    background - color: #266fed;
    -moz - border - radius: 4px;
    -webkit - border - radius: 4px;
    border - radius: 4px;
    border: 1px solid #1355bf;
    display: inline - block;
    cursor: pointer;
    color: #f8f7ff;
    font - family: Arial;
    font - size: 13px;
    font - weight: bold;
    padding: 5px 8px;
    text - decoration: none;
    text - shadow: 0px 1px 0px #063978;
}
.submit - button: hover {
    text - align: center;
    box - shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
