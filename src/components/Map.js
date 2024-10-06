import React, { useState, useContext, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  useZoomPanContext,
} from "react-simple-maps";
import landData from "../land-50m.json"; // Adjust the path as necessary
import "./Map.css";
import { LocationsContext } from "../contexts/LocationsContext.js";
import TripDetails from "./TripDetails.js";
import mochi from "../svgs/mochi.svg"; // Import the mochi.svg image

const CustomMarker = ({ coordinates, location, setSelectedCity }) => {
  const { k: zoom } = useZoomPanContext(); // Get the current zoom level
  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  return (
    <Marker coordinates={coordinates}>
      <g
        className="marker"
        onClick={(e) => {
          e.stopPropagation(); // Prevent the map's onClick from firing
          setSelectedCity(location);
        }}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        style={{ cursor: "pointer" }} // Set cursor to pointer
      >
        <circle
          className="marker-circle"
          r={window.innerWidth <= 768 ? 12 / zoom : 6 / zoom} // Double the radius for mobile view
          fill="#FFF"
          stroke="#000"
          strokeWidth={window.innerWidth <= 768 ? 2 / zoom : 1.5 / zoom}
        />
        {isHovered && (
          <text
            // Position the text to the right of the circle
            x={
              window.innerWidth <= 768
                ? location.left
                  ? -16 / zoom
                  : 16 / zoom
                : location.left
                ? -10 / zoom
                : 10 / zoom
            } // Adjust position based on screen size
            y={window.innerWidth <= 768 ? 10 / zoom : 5 / zoom}
            className="city-text"
            style={{
              fontSize: `${
                window.innerWidth <= 768 ? 35 / zoom : 17.5 / zoom
              }px`, // Double the font size for mobile view
              textAnchor: location.left ? "end" : "start", // Align text to the end if on the left
              animationName: location.left
                ? "fadeInPushLeft"
                : "fadeInPushRight", // Apply the appropriate animation
            }}
          >
            {location.name}
          </text>
        )}
      </g>
    </Marker>
  );
};

function Map() {
  const { Locations, selectedCity, setSelectedCity } =
    useContext(LocationsContext);
  const [tripDetailsKey, setTripDetailsKey] = useState(0);
  const [mapHeight, setMapHeight] = useState(
    window.innerWidth <= 480 ? 1400 : window.innerWidth <= 768 ? 900 : 500
  );

  useEffect(() => {
    setTripDetailsKey((prevKey) => prevKey + 1);
  }, [selectedCity]);

  useEffect(() => {
    const handleResize = () => {
      setMapHeight(
        window.innerWidth <= 480 ? 1400 : window.innerWidth <= 768 ? 900 : 500
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Map" onClick={() => setSelectedCity(null)}>
      <img
        src={mochi}
        alt="Mochi"
        className="mochi-icon"
        style={{
          filter: "drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.4))",
          transform: "scaleX(-1)",
        }}
      />
      <ComposableMap width={980} height={mapHeight}>
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="3"
              floodColor="#000"
              floodOpacity="0.4" // Increased opacity
            />
          </filter>
        </defs>
        <ZoomableGroup
          zoom={
            window.innerWidth <= 480 ? 2.5 : window.innerWidth <= 768 ? 1.5 : 1
          }
        >
          {/* Set default zoom to 2x */}
          <Geographies geography={landData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: "#F1D6E7", filter: "url(#shadow)" },
                      hover: { fill: "#F1D6E7", filter: "url(#shadow)" },
                      pressed: { fill: "#F1D6E7", filter: "url(#shadow)" },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {Locations.map((location) => (
            <CustomMarker
              key={location.name}
              coordinates={location.coordinates}
              name={location.name}
              location={location}
              setSelectedCity={setSelectedCity} // Pass setSelectedCity to CustomMarker
            />
          ))}
        </ZoomableGroup>
      </ComposableMap>
      {selectedCity && (
        <TripDetails key={tripDetailsKey} className="trip-details-class" />
      )}
    </div>
  );
}

export default Map;
