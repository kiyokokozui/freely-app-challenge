import React from "react";
import { InputType, UserInput } from "../shared/InputBox/InputBox";
import { NavigationBar } from "../shared/NavigationBar/NavigationBar";
import { DestinationSection } from "./DestinationSection";
import "./styles.scss";

interface IHomeProps {
  title: string;
  setTitle: (title: string) => void;

  startDate: Date | undefined;
  setStartDate: (date: Date) => void;

  endDate: Date | undefined;
  setEndDate: (date: Date) => void;

  destination: string;
  setDestination: (destination: string) => void;

  destinationList: string[];
  setDestinationList: (destinationList: string[]) => void;

  onAddDestinationClick: () => void;
  onSubmitTrip: () => void;
}

export const Home: React.FC<IHomeProps> = ({
  title,
  setTitle,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  destination,
  setDestination,
  destinationList,
  setDestinationList,
  onAddDestinationClick,
  onSubmitTrip,
}) => {
  return (
    <div className="home">
      <NavigationBar />

      <div className="home__content">
        <h1>Welcome To Freely</h1>

        <div className="home__content__input-container">
          <div className="home__content__input-title">
            <p>Title:</p>
            <p>Start Date:</p>
            <p>End Date:</p>
            <p>Destination:</p>
          </div>

          <div className="home__content__input">
            <div className="home__content__input-section">
              <UserInput value={title} onTextChange={setTitle} />
            </div>

            <div className="home__content__input-section">
              <UserInput
                type={InputType.DATE}
                value={startDate}
                onDateChange={setStartDate}
              />
            </div>

            <div className="home__content__input-section">
              <UserInput
                type={InputType.DATE}
                value={endDate}
                onDateChange={setEndDate}
              />
            </div>

            <div className="home__content__input-section">
              <UserInput
                multiple
                value={destination}
                onTextChange={setDestination}
                onAddClick={onAddDestinationClick}
              />
            </div>
          </div>
        </div>

        <div className="home__content__destination">
          <DestinationSection destinations={destinationList} />
        </div>

        <div className="home__content__button-container">
          <button onClick={onSubmitTrip} className="home__content__button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
