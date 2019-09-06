import React from "react";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="79"
        height="79"
        viewBox="0 0 79 79"
      >
        <defs>
          <clipPath id="clip-Play_Full_Player">
            <rect width="79" height="79" />
          </clipPath>
        </defs>
        <g
          id="Play_Full_Player"
          data-name="Play Full Player"
          clipPath="url(#clip-Play_Full_Player)"
        >
          <rect width="79" height="79" fill="rgba(255,255,255,0)" />
          <g
            id="Group_236"
            data-name="Group 236"
            transform="translate(-148 -558)"
          >
            <g
              id="Ellipse_236"
              data-name="Ellipse 236"
              transform="translate(148 558)"
              fill="none"
              stroke="#f1f9ff"
              strokeWidth="2"
              opacity="0.3"
            >
              <circle cx="39.5" cy="39.5" r="39.5" stroke="none" />
              <circle cx="39.5" cy="39.5" r="38.5" fill="none" />
            </g>
          </g>
          <g
            id="Group_242"
            data-name="Group 242"
            transform="translate(-18 -17)"
          >
            <path
              id="Path_5"
              data-name="Path 5"
              d="M685.466-33.355,668.345-43.891A1.539,1.539,0,0,0,666-42.581v21.45a1.539,1.539,0,0,0,2.345,1.311l17.121-10.537A1.761,1.761,0,0,0,685.466-33.355Z"
              transform="translate(-616.732 88.617)"
              fill="#cbc41b"
            />
          </g>
        </g>
      </svg>
    </button>
  );
}
