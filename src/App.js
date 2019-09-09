import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.scss";

import AudioPlayer from "./audio-player/AudioPlayer";
import PageTwo from "./PageTwo";

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
              <Link to="/page-two">Page Two</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={AudioPlayer} />
        <Route path="/page-two" component={PageTwo} />
        {/* <AudioPlayer /> */}
      </div>
    </Router>
  );
}

export default App;
