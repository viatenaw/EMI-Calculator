import React, { Component } from "react";
import Form from "./components/Form";
import LoanInfo from "./components/LoanInfo";
import logo from "./logo-2.png";
import "./bootstrap.min.css";
import "./App.css";
import BeforeChange from "./components/BeforeChange";

class App extends Component {
  state = {
    data: [],
    change: false

  };
  getData = info => {

    this.setState(prevState => ({
      data: prevState.data.concat(info),
      change: true
    }));
  };



  render() {
    return (
      <div className="mainContainer">

        <img id="header" src={logo} alt="Logo_FullThrottle" />

        <div className="row">

          <Form className="leftSide col-9" onChange={this.getData} />
          {
            this.state.change === true ?
              <LoanInfo className="col-3" data={this.state.data} /> :
              <BeforeChange />
          }
        </div>
      </div>
    );
  }
}

export default App;
