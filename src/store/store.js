import reducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
// const composeEnhancers = composeWithDevTools({
//     trace: true,
// });


// export const store = createStore(reducer);


// import { composeWithDevTools } from "redux-devtools-extension";

const middleware = []; // add any middleware you want to use here

// const composeEnhancers = composeWithDevTools({
//     // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// });

const composeEnhancers = composeWithDevTools({
    trace: true,
});

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
);
