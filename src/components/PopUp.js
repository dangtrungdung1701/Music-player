import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function PopUp(props) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <button
          onClick={() => {
            props.setShowPopUp(!props.showPopUp);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default PopUp;
