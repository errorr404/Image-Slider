import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImageData } from "./actions/imageDataAction";
import "./App.css";
import ImageSlideShow from "./modules/ImageSlideShow";

function App(props) {
  useEffect(() => {
    props.fetchImageData();
  }, []);
  const { images } = props;
  return (
    <div className="App">
      <ImageSlideShow images={images} transitionDelay={2000}/>
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state);
  const { images } = state;
  return {
    images
  };
};

export default connect(mapStateToProps, { fetchImageData })(App);
