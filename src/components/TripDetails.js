import React, { useContext } from "react";
import { LocationsContext } from "../contexts/LocationsContext";
import "./TripDetails.css";
import PersonSVG from "./PersonSVG";

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(
      (crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) *
        (i + 1)
    );
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const TripDetails = () => {
  const { selectedCity } = useContext(LocationsContext);

  if (!selectedCity) {
    return null;
  }

  return (
    <div className="trip-details">
      <ul className="trip-list">
        {selectedCity.trips.map((trip, index) => {
          const shuffledPeople = shuffleArray(trip.people); // Shuffle the people array
          return (
            <li key={index} className="trip-row">
              <span className="year">{trip.year}</span>
              <div className="people">
                {shuffledPeople.map((idx) => {
                  return <PersonSVG key={idx} id={idx} />;
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TripDetails;
