import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faChevronLeft,
  faEllipsisH,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import PopUp from "./PopUp";
import "./styles/player-header.css";

function PlayerHeader() {
  const extendClass = ["menu-extend"];
  const [isExtend, setIsExtend] = useState(true);
  const [exClass, setExClass] = useState("menu-extend");
  const [showPopUp, setShowPopUp] = useState(false);
  const [content, setContent] = useState("");
  const handleExtend = () => {
    setIsExtend(!isExtend);
    if (isExtend) {
      extendClass.push("extend");
    }
    setExClass(extendClass.join(" "));
  };
  return (
    <div className="c-player-header">
      <button className="back-btn">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="menu-container">
        <button className="more-btn" onClick={handleExtend}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
        <div className={exClass}>
          <button>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => {
                handleExtend();
                if (!showPopUp) {
                  setShowPopUp(!showPopUp);
                  setContent("Đã thêm vào danh sách yêu thích");
                }
              }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => {
                handleExtend();
                if (!showPopUp) {
                  setShowPopUp(!showPopUp);
                  setContent("Đã thêm vào danh sách phát");
                }
              }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faList}
              onClick={() => {
                handleExtend();
                if (!showPopUp) {
                  setShowPopUp(!showPopUp);
                  setContent("Danh sách phát");
                }
              }}
            />
          </button>
        </div>
      </div>
      {showPopUp ? (
        <PopUp
          text={content}
          setShowPopUp={setShowPopUp}
          showPopUp={showPopUp}
        />
      ) : null}
    </div>
  );
}

export default PlayerHeader;
