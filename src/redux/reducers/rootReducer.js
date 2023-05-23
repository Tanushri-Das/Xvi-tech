
// rootReducer.js
import { combineReducers } from 'redux';
import reducer from './reducers';
import focusDesignReducer from './focusDesignReducer';
import topicReducer from './topicReducer';

const rootReducer = combineReducers({
  collaborate: reducer,
  focusDesign: focusDesignReducer,
  topicDetails: topicReducer,
});

export default rootReducer;