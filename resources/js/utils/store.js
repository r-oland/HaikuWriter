import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

const initial = {
    haikus: [],
    lines: { line1: [], line2: [], line3: [] }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    initial,
    composeEnhancer(applyMiddleware(thunk))
);
