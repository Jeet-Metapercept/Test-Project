import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.test.js";
import * as serviceWorker from "./serviceWorker";

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
