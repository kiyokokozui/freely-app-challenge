import * as Effects from "redux-saga/effects";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { ITripResponse } from "../../models/trip";
import { fetchTripsData } from "../../utils/mockApi";
import { TripReduxActions } from "./trip.slice";

export function* handleGetTripData(): Generator<
  unknown,
  void,
  ITripResponse[]
> {
  const result = yield call(fetchTripsData);
  yield put(TripReduxActions.setTripResponse(result));
}

export function* watchGetTripData(): Generator<
  Effects.ForkEffect<never>,
  void
> {
  yield takeLatest(TripReduxActions.getTripData.type, handleGetTripData);
}

export function* handleAddTrip(): Generator<unknown, void, ITripResponse[]> {
  yield put(TripReduxActions.setAddTripStatus(true));
}

export function* watchAddTrip(): Generator<Effects.ForkEffect<never>, void> {
  yield takeLatest(TripReduxActions.addTrip.type, handleAddTrip);
}

const saga = [fork(watchGetTripData), fork(watchAddTrip)];

export default saga;
