import { ITripResponse } from "../../models/trip";

export interface TripState {
  isLoading: boolean;
  tripResponse: ITripResponse[];
  selectedTrip: ITripResponse | undefined;
  isTripAdditionSuccess: boolean;
}
