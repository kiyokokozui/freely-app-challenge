import React from "react";
import { Circles } from "react-loader-spinner";
import { ITripResponse } from "../../../models/trip";
import { colors } from "../../../styles/colors";
import { NavigationBar } from "../shared/NavigationBar/NavigationBar";
import { TripCard } from "../shared/TripCard/TripCard";
import "./styles.scss";

interface ITripProps {
  isLoading: boolean;
  tripData: ITripResponse[];
  onTripCardClick: (selectedTrip: ITripResponse) => void;
}

export const Trip: React.FC<ITripProps> = ({
  isLoading,
  tripData,
  onTripCardClick,
}) => {
  return (
    <div className="trip">
      <NavigationBar />
      <div className="trip__card">
        {isLoading ? (
          <Circles color={colors.LOADER} height={80} width={80} />
        ) : (
          <div className="trip__card__container">
            {tripData.map((trip, index) => {
              const { name, startDate, endDate, status } = trip;
              const onButtonClick = () => onTripCardClick(trip);

              return (
                <button
                  key={index}
                  onClick={onButtonClick}
                  className="trip__card--child"
                >
                  <TripCard
                    title={name}
                    startDate={startDate}
                    endDate={endDate}
                    status={status}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
