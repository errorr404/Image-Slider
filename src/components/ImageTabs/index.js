import React from "react";
import { connect } from "react-redux";
import { updateCurrentIndex } from "../../actions/imageDataAction";
import "./imageTabs.scss";

const ImageTabs = props => {
  const { sliderImages, currentIndex } = props;
  const displayTotalTabs = 5;
  let tabImageIndexArr = [];
  const getIndexArray = () => {
    let TempImageIndexArrForTab = [];
    const totalLength = sliderImages.length;
    const firstIndex =
      currentIndex < displayTotalTabs
        ? 0
        : currentIndex +
          displayTotalTabs / 2 -
          ((currentIndex + displayTotalTabs / 2) % displayTotalTabs);
    const lastIndex = firstIndex + displayTotalTabs;
    console.log(firstIndex, lastIndex);

    for (let i = Math.floor(firstIndex); i <= lastIndex; i++) {
      TempImageIndexArrForTab = [...TempImageIndexArrForTab, i % totalLength];
    }
    return TempImageIndexArrForTab;
  };
  const handleSetCurrentIndex = idx => {
    props.updateCurrentIndex(idx);
  };
  tabImageIndexArr = getIndexArray();
  console.log(tabImageIndexArr);
  return (
    <div className="imageTabs">
      {tabImageIndexArr &&
        sliderImages.length > 0 &&
        tabImageIndexArr.map(tab => (
          <div
            key={tab}
            onClick={() => handleSetCurrentIndex(tab)}
            className={`imageTabs__tabImage imageTabs__tabImage--${
              currentIndex === tab ? "active" : ""
            }`}
            style={{ background: `url(${sliderImages[tab].url})` }}
          />
        ))}
    </div>
  );
};
const mapStateToProps = state => {
  const { sliderImages, currentIndex } = state;
  console.log(state);
  return {
    sliderImages,
    currentIndex
  };
};
export default connect(mapStateToProps, { updateCurrentIndex })(ImageTabs);
