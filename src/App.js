import React from "react";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: "true",
    };
  }

  //other functions
  buttonStart = (e) => {
    document.getElementById("file").className = "d-none";
    document.getElementById("shell").className = "window";
    
  };

  render() {
    return (
      <div className="App-header ">
        <label
          id="file"
          className="btn btn-success"
          htmlFor="typefile"
          onClick={this.buttonStart}
        >
          Upload <i className="fas fa-cloud-upload-alt"></i>
        </label>
        <input
          id="typefile"
          type="file"
          className="btn btn-outline-success  d-none"
        />

        <div className="window d-none" id="shell">
          <div className="terminal">
            <div id="process_msm" className=""></div>
          </div>
        </div>

        <button className="btn btn-success btn-sm mt-2 d-none">
          {" "}
          Dowload xlsx <i className="fas fa-cloud-download-alt"></i>
        </button>
      </div>
    );
  }
}

export default App;
