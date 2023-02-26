import { combineReducers } from "redux";
import { cartReducer } from "./reducers/index.js";

const appReducer = combineReducers({
    cartReducer
});

const initialState = appReducer({}, {});

const rootReducer = (state = initialState, action) => {
    return appReducer(state, action);
};

export default rootReducer;