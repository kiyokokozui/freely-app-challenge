import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeContainer } from "../views/containers/Home/HomeContainer";
import { TripContainer } from "../views/containers/Trip/TripContainer";
import { TripDetailsContainer } from "../views/containers/TripDetails/TripDetailsContainer";
import { Screens } from "./const";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={Screens.HOME} element={<HomeContainer />} />
      <Route path={Screens.TRIP} element={<TripContainer />} />
      <Route path={Screens.TRIPDETAILS} element={<TripDetailsContainer />} />
    </Routes>
  );
};
