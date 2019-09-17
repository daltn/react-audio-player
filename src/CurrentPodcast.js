import React from "react";
import AudioPlayer from "./audio-player/AudioPlayer";

const CurrentPodcast = () => (
  <>
    <img
      className="rounded"
      src="https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-star-wars-news-interviews-and-AIg3cZVKCsL.1400x1400.jpg"
      alt="podcast cover"
      width="400"
    />
    <AudioPlayer />
  </>
);

export default CurrentPodcast;
