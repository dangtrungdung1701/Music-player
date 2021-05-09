import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faVolumeUp,
  faRandom,
  faVolumeMute,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import { Slider } from "@material-ui/core";
function PlayerControl(props) {
  const [currVolume, setCurrVolume] = useState(10);
  const onChangeVolume = (e, newValue) => {
    props.audio.volume = (1 / 10) * newValue;
    props.setVolume(newValue);
  };
  return (
    <div className="c-player-controls">
      <div className="c-player-controls-plus">
        <div className="volume-container">
          <button className="volume-btn">
            <FontAwesomeIcon
              className="volume-icon"
              icon={props.volume > 0 ? faVolumeUp : faVolumeMute}
              onClick={() => {
                if (!props.isMute) {
                  setCurrVolume(props.audio.volume * 10);
                }
                props.setIsMute(!props.isMute);
                props.setVolume(!props.isMute ? 0 : currVolume);
              }}
            />
            <div className="slider">
              <Slider max={10} value={props.volume} onChange={onChangeVolume} />
            </div>
          </button>
        </div>
        <div className="random-container">
          <button
            className="random-btn"
            onClick={(e) => {
              props.setIsSuffle(!props.isSuffle);
              e.target.style.color = props.isSuffle ? "white" : "black";
            }}
          >
            <FontAwesomeIcon icon={faRandom} />
          </button>
        </div>
      </div>
      <div className="c-player-controls-traditional">
        <button className="back-btn" onClick={() => props.SkipSong(false)}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          className="play-btn"
          onClick={() => {
            props.setIsPlaying(!props.isPlaying);
          }}
        >
          <FontAwesomeIcon icon={props.isPlaying ? faPlay : faPause} />
        </button>
        <button className="next-btn" onClick={() => props.SkipSong()}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </div>
  );
}

export default PlayerControl;
