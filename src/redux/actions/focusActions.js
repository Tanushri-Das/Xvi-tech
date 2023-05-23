import { focusDesignData } from "../../Components/FocusDesign/focusDesignData";


// focusActions.js
export const FETCH_FOCUSDESIGN_SUCCESS = 'FETCH_FOCUSDESIGN_SUCCESS';
export const FETCH_FOCUSDESIGN_FAILURE = 'FETCH_FOCUSDESIGN_FAILURE';

export const fetchFocusDesignSuccess = () => {
    return {
      type: FETCH_FOCUSDESIGN_SUCCESS,
      payload: focusDesignData,
    };
  };
  
export const fetchFocusDesignFailure = (error) => {
  return {
    type: FETCH_FOCUSDESIGN_FAILURE,
    payload: error,
  };
};
