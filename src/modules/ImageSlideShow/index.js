// Image slideshow component
// props --> images --> [{url,title}], slideDelay --> timer for slider
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addSliderImagesToStore,
  updateCurrentIndex
} from "../../actions/imageDataAction";
import Image from "../../components/Image";
import ImageTabs from "../../components/ImageTabs";
import TabTitle from "../../components/TabTitle";

const ImageSlideShow = props => {
  const { images, currentIndex, slideDelay, isInitialImageIsLoaded } = props;
  useEffect(() => {
    props.addSliderImagesToStore(images);
  }, [props.images]);
  useEffect(() => {
    let timeInterval = setInterval(() => {
      props.updateCurrentIndex();
    }, slideDelay);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  console.log("currentIndex-->", currentIndex, images);
  return (
    <>
      {images && images.length > 0 && (
        <div>
          {isInitialImageIsLoaded && (
            <TabTitle title={images[currentIndex].title} />
          )}
          <Image imgSrc={images[currentIndex].url} />
          {isInitialImageIsLoaded && <ImageTabs />}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { currentIndex, isInitialImageIsLoaded } = state;
  return { currentIndex,isInitialImageIsLoaded };
};
export default connect(mapStateToProps, {
  addSliderImagesToStore,
  updateCurrentIndex
})(ImageSlideShow);
