import { applyMiddleware, combineReducers, createStore } from "redux";
import { tasksReducers, jwtReducer, userProfileReducer } from "./reducers";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

const allReducers = combineReducers({
  tasks: tasksReducers,
  user: userProfileReducer,
  isToken: jwtReducer,
});

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
