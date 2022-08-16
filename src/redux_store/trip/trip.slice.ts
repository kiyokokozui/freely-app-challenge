import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITripResponse } from "../../models/trip";
import { AllActionsOf } from "../actions";
import { TripState } from "./models";

const initialState: TripState = {
  isLoading: false,
  tripResponse: [],
  selectedTrip: undefined,
  isTripAdditionSuccess: false,
};

const tripSlice = createSlice({
  name: "Trip",
  initialState: initialState,
  reducers: {
    getTripData(state) {
      state.isLoading = true;
    },
    setTripResponse(state, action: PayloadAction<ITripResponse[]>) {
      state.isLoading = false;
      state.tripResponse = action.payload;
    },
    setSelectedTrip(state, action: PayloadAction<ITripResponse>) {
      state.selectedTrip = action.payload;
    },
    addTrip(state, action: PayloadAction<ITripResponse>) {
      state.tripResponse.push(action.payload);
    },
    setAddTripStatus(state, action: PayloadAction<boolean>) {
      state.isTripAdditionSuccess = action.payload;
    },
  },
});

const { actions, reducer } = tripSlice;
export type tripActionType = AllActionsOf<typeof actions>;
export { actions as TripReduxActions, reducer as tripReducer, initialState };
