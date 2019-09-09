import React from "react";

import Podcast from "./Podcast";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import Back15 from "./Back15";
import Forward15 from "./Forward15";
import Time from "./Time";

import useAudioPlayer from "./useAudioPlayer";

function AudioPlayer() {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  } = useAudioPlayer();

  const backwards = () => {
    setClickedTime(curTime - 15);
  };

  const forwards = () => {
    setClickedTime(curTime + 15);
  };

  return (
    <div className="player">
      <audio id="audio">
        <source src="away.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Bar
        curTime={curTime}
        duration={duration}
        onTimeUpdate={time => setClickedTime(time)}
      />
      <Time curTime={curTime} duration={duration} />
      <Podcast podcastName="Don't Go Away" podcastArtist="Affinity" />

      <div className="controls">
        <Back15 handleClick={() => backwards()} />
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Forward15 handleClick={() => forwards()} />
      </div>
    </div>
  );
}

export default AudioPlayer;
