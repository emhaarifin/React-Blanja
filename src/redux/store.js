import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./reducers";

const logger = createLogger();
const enhancers = applyMiddleware(thunk, logger);

const store = createStore(reducers, enhancers);

export default store;
