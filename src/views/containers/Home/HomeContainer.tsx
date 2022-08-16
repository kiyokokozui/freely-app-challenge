import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITripResponse, STATUS } from "../../../models/trip";
import { RootState } from "../../../redux_store/rootReducer";
import { TripReduxActions } from "../../../redux_store/trip/trip.slice";
import { formatDate, isPastDate } from "../../../utils";
import { Home } from "../../components/Home/Home";

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { tripResponse, isTripAdditionSuccess } = useSelector(
    (s: RootState) => s.trip
  );

  const [title, setTitle] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [destination, setDestination] = useState<string>("");

  const [destinationList, setDestinationList] = useState<string[]>([]);

  const onAddDestinationClick = () => {
    if (!!destination) {
      if (destinationList.length >= 5) {
        alert("Destination has already exceeded its limit");
      } else {
        setDestinationList([...destinationList, destination]);
      }
      setDestination("");
    } else {
      alert("Destination cannot be empty");
    }
  };

  const onSubmitTrip = () => {
    if (!!title && !!startDate && !!endDate && !!destinationList.length) {
      if (isPastDate(startDate) || isPastDate(endDate)) {
        alert("Dates must be in the future");
      } else {
        const tripId = tripResponse.length + 1;
        const payload: ITripResponse = {
          id: tripId.toString(),
          name: title,
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
          destinations: destinationList,
          status: STATUS.NOT_STARTED,
        };

        dispatch(TripReduxActions.addTrip(payload));
      }
    } else {
      alert("All fields are mandatory");
    }
  };

  useEffect(() => {
    dispatch(TripReduxActions.getTripData());
  }, [dispatch]);

  useEffect(() => {
    if (isTripAdditionSuccess) {
      alert("Trip has been added successfully!");
      dispatch(TripReduxActions.setAddTripStatus(false));
      setTitle("");
      setStartDate(undefined);
      setEndDate(undefined);
      setDestinationList([]);
    }
  }, [dispatch, isTripAdditionSuccess]);

  return (
    <Home
      title={title}
      setTitle={setTitle}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      destination={destination}
      setDestination={setDestination}
      destinationList={destinationList}
      setDestinationList={setDestinationList}
      onAddDestinationClick={onAddDestinationClick}
      onSubmitTrip={onSubmitTrip}
    />
  );
};
