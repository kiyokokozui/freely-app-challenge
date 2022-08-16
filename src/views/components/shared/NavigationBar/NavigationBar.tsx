import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Screens } from "../../../../routes/const";
import "./styles.scss";

export const NavigationBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onHomeClick = () => navigate(Screens.HOME);
  const onTripClick = () => navigate(Screens.TRIP);

  return (
    <div className="nav-bar">
      <button
        onClick={onHomeClick}
        className={
          location.pathname === Screens.HOME
            ? "nav-bar__button nav-bar__button--selected"
            : "nav-bar__button"
        }
      >
        HOME
      </button>
      <button
        onClick={onTripClick}
        className={
          location.pathname === Screens.TRIP ||
          location.pathname === Screens.TRIPDETAILS
            ? "nav-bar__button nav-bar__button--selected"
            : "nav-bar__button"
        }
      >
        TRIPS
      </button>
    </div>
  );
};
