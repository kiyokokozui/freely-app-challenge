import React from "react";

interface IDestinationSectionProps {
  destinations: string[];
}

export const DestinationSection: React.FC<IDestinationSectionProps> = ({
  destinations,
}) => {
  return (
    <div className="destination-section">
      {destinations.map((destination, index) => (
        <li key={index} className="destination-section__text">
          {destination}
        </li>
      ))}
    </div>
  );
};
