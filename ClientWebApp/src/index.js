import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import { initializeFirebase } from "./push";
initializeFirebase();

ReactDOM.render(<App />, document.getElementById("root"));
