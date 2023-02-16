import React from "react";
import ReactDOM from "react-dom";
//custom font ==> use @typeface in index.css for global styles
import "../src/assets/Fonts/PPNeueMontreal-Bold.otf";
import "../src/assets/Fonts/PPNeueMontreal-Book.otf";
import "../src/assets/Fonts/PPNeueMontreal-Thin.otf";
import "../src/assets/Fonts/PPNeueMontreal-Medium.otf";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
