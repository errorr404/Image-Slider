import React from "react";
import { connect } from "react-redux";
import { setImageIsLoaded } from "../../actions/imageDataAction";
import "./image.scss";
import Controllers from "../Controllers";

const Image = props => {
  const { imgSrc, setImageIsLoaded, isInitialImageIsLoaded } = props;
  const handleImageLoadStatus = () => setImageIsLoaded();
  return (
    <div className="imageContainer">
      {isInitialImageIsLoaded && <Controllers />}
      <img
        className="imageContainer__image"
        src={imgSrc}
        alt="slideImage"
        onLoad={handleImageLoadStatus}
      />
      {isInitialImageIsLoaded && <Controllers right />}
    </div>
  );
};
const mapStateToProps = state => {
  const { isInitialImageIsLoaded } = state;
  return { isInitialImageIsLoaded };
};
export default connect(mapStateToProps, { setImageIsLoaded })(Image);
