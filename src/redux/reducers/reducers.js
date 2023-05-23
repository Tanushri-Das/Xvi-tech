// reducer.js

import { collaborateData } from '../../Components/LetsCollaborate/data';
import { FETCH_CARDS_FAILURE, FETCH_CARDS_SUCCESS } from '../actions/actions';


const initialState = {
  cards: collaborateData,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        error: null,
      };
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        cards: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
