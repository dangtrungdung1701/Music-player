import React from "react";
import "./styles/player-details.css";

function PlayerDetail(props) {
  return (
    <div className="c-player-details">
      <div className="details-img">
        <img
          className={props.isPlaying ? "play" : "pause"}
          src={props.song.img_src}
          alt=""
        ></img>
      </div>
      <h3 className="details-title">{props.song.title}</h3>
      <h4 className="details-artist">{props.song.artist}</h4>
    </div>
  );
}

export default PlayerDetail;
