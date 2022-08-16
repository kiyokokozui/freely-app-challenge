import React from "react";
import { ITripResponse } from "../../../models/trip";
import { NavigationBar } from "../shared/NavigationBar/NavigationBar";
import "./styles.scss";
import leftArrow from "../../../assets/arrow-left.svg";
import { Dash } from "../shared/Dash/Dash";
import { DestinationCard } from "./DestinationCard";

interface ITripDetailsProps {
  selectedTrip: ITripResponse;
  onBackClick: () => void;
}

export const TripDetails: React.FC<ITripDetailsProps> = ({
  selectedTrip,
  onBackClick,
}) => {
  const { name, startDate, endDate, status, destinations } = selectedTrip;

  return (
    <div className="trip-details">
      <NavigationBar />
      <div className="trip-details__container">
        <button onClick={onBackClick} className="trip-details__back-button">
          <img alt="Back-Button" width={40} height={40} src={leftArrow} />
        </button>

        <div className="trip-details__content">
          <div className="trip-details__content--header">
            <h1>{name}</h1>

            <div className="trip-details__content--header trip-details__content--header-date">
              <p>{startDate}</p>
              <Dash />
              <p>{endDate}</p>
            </div>

            <p>{status}</p>
          </div>

          <div className="trip-details__content--destinations">
            <DestinationCard destinations={destinations} />
          </div>
        </div>
      </div>
    </div>
  );
};
