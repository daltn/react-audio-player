import React from "react";

function Podcast(props) {
  const { podcastName, podcastArtist } = props;

  return (
    <div className="podcast">
      <h1 className="podcast__title">
        {podcastArtist} - {podcastName}
      </h1>
    </div>
  );
}

export default Podcast;
