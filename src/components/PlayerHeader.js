import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faChevronLeft,
  faEllipsisH,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

function PlayerHeader() {
  // console.log(props.isExtend);
  const extendClass = ["menu-extend"];
  const [isExtend, setIsExtend] = useState(true);
  const [exClass, setExClass] = useState("menu-extend");
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
                setTimeout(function () {
                  alert("Đã thêm vào danh sách yêu thích");
                }, 300);
              }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => {
                handleExtend();
                setTimeout(function () {
                  alert("Đã thêm vào danh sách phát");
                }, 300);
              }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faList}
              onClick={() => {
                handleExtend();
                setTimeout(function () {
                  alert("Danh sách phát");
                }, 300);
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerHeader;
