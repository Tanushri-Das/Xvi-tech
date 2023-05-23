import { topicDetails } from "../../Components/AllTopicDetails/TopicsData";

export const fetchTopicDetails = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_TOPIC_DETAILS_REQUEST' });

    try {
      // Simulate an asynchronous API call
      setTimeout(() => {
        dispatch({
          type: 'FETCH_TOPIC_DETAILS_SUCCESS',
          payload: topicDetails,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: 'FETCH_TOPIC_DETAILS_FAILURE',
        payload: error.message,
      });
    }
  };
};
