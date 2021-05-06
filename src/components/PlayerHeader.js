import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faChevronLeft,
  faEllipsisH,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import PopUp from "./PopUp";

function PlayerHeader() {
  // console.log(props.isExtend);
  const extendClass = ["menu-extend"];
  const [isExtend, setIsExtend] = useState(true);
  const [exClass, setExClass] = useState("menu-extend");
  const [showPopUp, setShowPopUp] = useState(false);
  const [content, setContent] = useState("");
  const handleExtend = () => {
    setIsExtend(!isExtend);
    console.log(isExtend);
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
                setShowPopUp(!showPopUp);
                setContent("Đã thêm vào danh sách yêu thích");
                setTimeout(function () {
                  setShowPopUp(!showPopUp);
                }, 1000);
              }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => {
                handleExtend();
                setShowPopUp(!showPopUp);
                setContent("Đã thêm vào danh sách phát");
              }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faList}
              onClick={() => {
                handleExtend();
                setShowPopUp(!showPopUp);
                setContent("Danh sách phát");
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
