import {
  ADD_IMAGE_DATA_TO_STORE,
  UPDATE_CURRENT_INDEX,
  ADD_SLIDER_IMAGE_TO_STORE,
  SET_IMAGE_IS_LOADED
} from "../constant";
const initialState = {
  images: [],
  sliderImages: [],
  currentIndex: 0,
  isInitialImageIsLoaded: false
};

const sliderReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADD_IMAGE_DATA_TO_STORE:
      const { images } = action.payload;
      return { ...state, images };
    case ADD_SLIDER_IMAGE_TO_STORE:
      const { images: sliderImages } = action.payload;
      return { ...state, sliderImages };
    case UPDATE_CURRENT_INDEX:
      const { images: totalImage, currentIndex } = state;
      let { IndexToSet } = action.payload;
      const toalLength = totalImage.length > 0 ? totalImage.length : 1;
      if (typeof IndexToSet === "undefined" && totalImage.length > 0) {
        IndexToSet = currentIndex + 1;
        return { ...state, currentIndex: IndexToSet % toalLength };
      }
      return { ...state, currentIndex: IndexToSet % toalLength };
    case SET_IMAGE_IS_LOADED:
      const { isInitialImageIsLoaded } = state;
      if (!isInitialImageIsLoaded)
        return { ...state, isInitialImageIsLoaded: true };
      return state;
    default:
      return state;
  }
};
export default sliderReducer;
