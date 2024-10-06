// src/context/LocationsContext.js
import React, { createContext, useState } from "react";
import Locations from "../components/Locations";

export const LocationsContext = createContext();

export const LocationsProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <LocationsContext.Provider
      value={{ Locations, selectedCity, setSelectedCity }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
