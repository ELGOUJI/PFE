import React, { Component } from "react";
import Ensembles from "./routes/Ensembles";

export default class App extends Component {
  render() {
    return (
      <div style={{overflowX:'hidden'}}>
        <Ensembles/>
      </div>
    );
  }
}
