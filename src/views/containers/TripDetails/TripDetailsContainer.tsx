import React from "react";
import { Circles } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux_store/rootReducer";
import { colors } from "../../../styles/colors";
import { TripDetails } from "../../components/TripDetails/TripDetails";

export const TripDetailsContainer: React.FC = () => {
  const navigate = useNavigate();

  const { selectedTrip } = useSelector((s: RootState) => s.trip);

  const onBackClick = () => navigate(-1);

  return selectedTrip ? (
    <TripDetails selectedTrip={selectedTrip} onBackClick={onBackClick} />
  ) : (
    <Circles color={colors.LOADER} height={80} width={80} />
  );
};
