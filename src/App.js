import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImageData } from "./actions/imageDataAction";
import "./App.css";
import ImageSlideShow from "./modules/ImageSlideShow";
import Loader from "./components/Loader";

function App(props) {
  useEffect(() => {
    // fetch the images api
    props.fetchImageData();
  }, []);
  const { images } = props;
  return (
    <div className="App">
   {images.length>0 ? <ImageSlideShow images={images} slideDelay={2000}/>: <Loader />}
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
