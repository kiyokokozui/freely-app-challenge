import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux_store/rootReducer";
import rootSaga from "./redux_store/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware:
    process.env.REACT_APP_SCHEME === "dev"
      ? [sagaMiddleware, logger]
      : [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };
