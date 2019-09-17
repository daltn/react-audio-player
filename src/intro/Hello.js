import React from "react";
import { Link } from "react-router-dom";
import mic from "../icons/Mic Yellow.svg";

const Hello = () => (
  <section className="wrapper">
    <img style={{ margin: `5vh` }} src={mic} alt="yellow microphone" />
    <h1 className="intro">READY TO FIND YOUR NEXT FAVORITE PODCAST?</h1>
    <p>Let's help you discover new shows</p>
    <Link to="/audio-player">
      <button className="button-ui" type="button">
        BEGIN
      </button>
    </Link>
  </section>
);

export default Hello;
