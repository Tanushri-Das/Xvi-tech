// actions.js

export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

export const fetchCardsSuccess = (cards) => {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: cards,
  };
};

export const fetchCardsFailure = (error) => {
  return {
    type: FETCH_CARDS_FAILURE,
    payload: error,
  };
};
