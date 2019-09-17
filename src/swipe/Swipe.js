import React from "react";
import honestBeauty from "../icons/honest.png";
import pause from "../icons/pause-collapsed.svg";
import like from "../icons/like-button.svg";
import reject from "../icons/reject-button.svg";

const Swipe = () => {
  return (
    <section className="wrapper">
      <img src={honestBeauty} alt="honest beauty podcast" />
      <div>
        <button className="transparent" type="button">
          <img src={reject} alt="reject button" />
        </button>
        <button className="transparent" type="button">
          <img src={pause} alt="pause" />
        </button>
        <button className="transparent" type="button">
          <img src={like} alt="like button" />
        </button>
      </div>
    </section>
  );
};

export default Swipe;
