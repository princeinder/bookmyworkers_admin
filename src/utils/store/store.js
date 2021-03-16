import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { userSigninReducer } from "../../reducers/authReducer";
import { adminReducer } from "../../reducers/adminReducer";

const authState = localStorage.getItem("access_token");

const initialState = {
  userSignin: { authState },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  adminData: adminReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
