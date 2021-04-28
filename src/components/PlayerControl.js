import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
function PlayerControl(props) {
  return (
    <div className="c-player-controls">
      <button className="back-btn" onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => {
          props.setIsPlaying(props.isPlaying === true ? false : true);
        }}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPlay : faPause} />
      </button>
      <button className="next-btn" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default PlayerControl;
