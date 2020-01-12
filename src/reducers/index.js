import {
  ADD_IMAGE_DATA_TO_STORE,
  UPDATE_CURRENT_INDEX,
  ADD_SLIDER_IMAGE_TO_STORE
} from "../constant";
const initialState = {
  images: [],
  sliderImages: [],
  currentIndex: 0
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
      console.log(typeof currentIndex);
      console.log(IndexToSet, currentIndex);
      if (IndexToSet === undefined && totalImage.length > 0){

        IndexToSet = currentIndex + 1;
        return { ...state, currentIndex: IndexToSet % totalImage.length };
      }
        return { ...state, currentIndex: IndexToSet % totalImage.length };

    default:
      return state;
  }
};
export default sliderReducer;
