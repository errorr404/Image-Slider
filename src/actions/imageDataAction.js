import axios from "axios";
import { imageDataUrl } from "../apiUrl";
import {
  ADD_IMAGE_DATA_TO_STORE,
  UPDATE_CURRENT_INDEX,
  ADD_SLIDER_IMAGE_TO_STORE,
  SET_IMAGE_IS_LOADED
} from "../constant";

export const fetchImageData = () => {
  return dispatch => {
    axios({
      method: "GET",
      url: imageDataUrl
    })
      .then(res => dispatch(addImagesToStore(res.data.images)))
      .catch(err => console.log(err));
  };
};
const addImagesToStore = images => {
  const action = {
    type: ADD_IMAGE_DATA_TO_STORE,
    payload: {
      images
    }
  };
  return action;
};
export const addSliderImagesToStore = images => {
  const action = {
    type: ADD_SLIDER_IMAGE_TO_STORE,
    payload: {
      images
    }
  };
  return action;
};
export const updateCurrentIndex = idx => {
  const action = {

    type: UPDATE_CURRENT_INDEX,
    payload: {
      IndexToSet: idx,
    }
  };
  return action;
};
export const setImageIsLoaded = () =>{
  const action = {
    type:SET_IMAGE_IS_LOADED
  }
  return action;
}
