import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import tripSaga from "./trip/saga";

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  try {
    yield all([...tripSaga]);
  } catch (err) {
    console.log("error caught in rootsaga", err);
  }
}
