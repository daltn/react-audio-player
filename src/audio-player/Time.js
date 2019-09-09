import React from "react";
import moment from "moment";

const Time = props => {
  const { duration, curTime, onTimeUpdate } = props;

  const timeLeft = curTime - duration;

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

  return (
    <div className="time">
      <span className="time__left">{formatDuration(curTime)}</span>
      <span className="time__right">{formatDuration(timeLeft)}</span>
    </div>
  );
};

export default Time;
