const initialState = {
    topicDetails: [],
    isLoading: false,
    error: null,
  };
  
  const topicReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TOPIC_DETAILS_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'FETCH_TOPIC_DETAILS_SUCCESS':
        return {
          ...state,
          topicDetails: action.payload,
          isLoading: false,
          error: null,
        };
      case 'FETCH_TOPIC_DETAILS_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default topicReducer;
  
  
  