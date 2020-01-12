import React from "react";
import { connect } from "react-redux";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { updateCurrentIndex } from "../../actions/imageDataAction";
import "./controllers.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Controllers = props => {
  const { right, currentIndex } = props;
  const handleUpdateIndex = incr => {
    if (currentIndex === 0 && incr === -1) return;
    props.updateCurrentIndex(currentIndex + incr);
  };
  return (
    <div className="iconContainer">
      <FontAwesomeIcon
        className="iconContainer__icon"
        role="button"
        icon={right ? faAngleRight : faAngleLeft}
        onClick={() => handleUpdateIndex(right ? 1 : -1)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { currentIndex } = state;
  return { currentIndex };
};
export default connect(mapStateToProps, { updateCurrentIndex })(Controllers);
