import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faChevronLeft,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

function PlayerHeader() {
  return (
    <div className="c-player-header">
      <button className="back-btn">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="more-btn">
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
    </div>
  );
}

export default PlayerHeader;
