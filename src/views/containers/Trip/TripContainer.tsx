import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ITripResponse } from "../../../models/trip";
import { RootState } from "../../../redux_store/rootReducer";
import { TripReduxActions } from "../../../redux_store/trip/trip.slice";
import { Screens } from "../../../routes/const";
import { Trip } from "../../components/Trip/Trip";

export const TripContainer: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading: isTripLoading, tripResponse } = useSelector(
    (s: RootState) => s.trip
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onTripCardClick = (selectedTrip: ITripResponse) => {
    dispatch(TripReduxActions.setSelectedTrip(selectedTrip));
    navigate(Screens.TRIPDETAILS);
  };

  useEffect(() => {
    const timer = setTimeout(() => !isTripLoading && setIsLoading(false), 3000);

    return () => clearTimeout(timer);
  }, [isTripLoading]);

  return (
    <Trip
      isLoading={isLoading}
      tripData={tripResponse}
      onTripCardClick={onTripCardClick}
    />
  );
};
