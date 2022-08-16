import { ActionFromReducer, combineReducers, Dispatch } from "redux";
import { tripReducer } from "./trip/trip.slice";

export type RootState = ReturnType<typeof rootReducer>;
export type ReduxAction = ActionFromReducer<typeof rootReducer>;
export type RootDispatch = Dispatch<ReduxAction>;

const rootReducer = combineReducers({
  trip: tripReducer,
});

export default rootReducer;
