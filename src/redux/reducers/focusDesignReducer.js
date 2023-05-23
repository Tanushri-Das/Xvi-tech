
// focusDesignReducer.js

import { FETCH_FOCUSDESIGN_SUCCESS, FETCH_FOCUSDESIGN_FAILURE } from "../actions/focusActions";

const initialState = {
  focusDesign: [], // Set initial state to an empty array
  error: null,
};

const focusDesignReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOCUSDESIGN_SUCCESS:
      console.log('FETCH_FOCUSDESIGN_SUCCESS:', action.payload); // Check the payload value
      return {
        ...state,
        focusDesign: action.payload,
        error: null,
      };
    case FETCH_FOCUSDESIGN_FAILURE:
      console.log('FETCH_FOCUSDESIGN_FAILURE:', action.payload); // Check the payload value
      return {
        ...state,
        focusDesign: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default focusDesignReducer;
