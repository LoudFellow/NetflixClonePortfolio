import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "normalize.css";
import "./global-styles.css";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
