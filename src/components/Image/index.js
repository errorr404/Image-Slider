import React from "react";
import "./image.scss";
import Controllers from "../Controllers";

const Image = props => {
  const { imgSrc } = props;
  return (
    <div className="imageContainer">
      <Controllers />
      <img className="imageContainer__image" src={imgSrc} alt="slideImage" />
      <Controllers right />
    </div>
  );
};
export default Image;
