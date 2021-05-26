import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./util/reportWebVitals";

// Only reference of style sheets needed
import "./master.scss";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
//reportWebVitals(console.log);
