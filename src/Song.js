import React from "react";

function Song(props) {
  const { songName, songArtist } = props;

  return (
    <div className="song">
      <h1 className="song__title">
        {songArtist} - {songName}
      </h1>
    </div>
  );
}

export default Song;
