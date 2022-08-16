import React from "react";

interface IDestinationCardProps {
  destinations: string[];
}

export const DestinationCard: React.FC<IDestinationCardProps> = ({
  destinations,
}) => {
  return (
    <div className="destination-card">
      {destinations.map((destination) => (
        <p className="destination-card__text">{destination}</p>
      ))}
    </div>
  );
};
