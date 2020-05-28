//import React, { Fragment } from "react";
//import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./App.test.js";
//import * as serviceWorker from "./serviceWorker";

// ========================================

//ReactDOM.render(<App />, document.getElementById("root"));
//serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return <h1>My Reach App!</h1>;
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));

