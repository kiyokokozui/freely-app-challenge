import React, { useEffect, useState } from "react";
import { STATUS } from "../../../../models/trip";
import { colors } from "../../../../styles/colors";
import { Dash } from "../Dash/Dash";
import "./styles.scss";

interface ITripCardProps {
  title: string;
  startDate: string;
  endDate: string;
  status: STATUS;
}

export const TripCard: React.FC<ITripCardProps> = ({
  title,
  startDate,
  endDate,
  status,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onFocus = () => {
    if (status === STATUS.NOT_STARTED) {
      setIsFocused(true);
    }
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    // Calls onFocus when the window first loads
    onFocus();
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return (
    <div
      style={
        isFocused
          ? { backgroundColor: colors.TRIP_CARD_BACKGROUND_HIGHLIGHTED }
          : undefined
      }
      className="trip-card trip-card__container"
    >
      <h1>{title}</h1>
      <div className="trip-card__date">
        <p>{startDate}</p>
        <Dash />
        <p>{endDate}</p>
      </div>

      <div className="trip-card__status">
        <h5 className="trip-card__status--text">{status}</h5>
      </div>
    </div>
  );
};
