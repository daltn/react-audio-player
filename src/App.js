import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.scss";

import CurrentPodcast from "./CurrentPodcast";
import Hello from "./intro/Hello";
import Swipe from "./swipe/Swipe";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/current-podcast">Current Podcast</Link>
            </li>
            <li>
              <Link to="/hello">Introduction</Link>
            </li>
            <li>
              <Link to="/swipe">Swipe</Link>
            </li>
          </ul>
        </nav>
        <Route path="/current-podcast" exact component={CurrentPodcast} />
        <Route path="/hello" exact component={Hello} />
        <Route path="/swipe" exact component={Swipe} />
      </div>
    </Router>
  );
}

export default App;
