import React from "react";

const TripBubble = ({ location, rotation = 45, stemHeight = 19 }) => {
  const radius = 45;

  // Randomize the rotation value between 0 and 360 degrees
  // rotation = Math.random() * 360;

  // Convert degrees to radians
  const radians = (rotation * Math.PI) / 180;

  // Calculate the new position based on the rotation
  const cx = Math.sin(radians) * (radius + stemHeight);
  const cy = -Math.cos(radians) * (radius + stemHeight);

  const stemThickness = 0.225;

  // Calculate the points for the stem triangle
  const stemX1 = 0;
  const stemY1 = 0;
  const stemX2 = Math.sin(radians + stemThickness) * (radius + stemHeight);
  const stemY2 = -Math.cos(radians + stemThickness) * (radius + stemHeight);
  const stemX3 = Math.sin(radians - stemThickness) * (radius + stemHeight);
  const stemY3 = -Math.cos(radians - stemThickness) * (radius + stemHeight);

  return (
    <g className="trip-bubble">
      <path
        d={`M ${stemX1},${stemY1}
               L ${stemX2},${stemY2}
               L ${stemX3},${stemY3}
               Z`}
        fill="white"
        stroke="none"
      />
      <circle cx={cx} cy={cy} r={radius} fill="white" stroke="none" />
      {/* Text inside the bubble */}
      {/* <text
        x={cx}
        y={cy}
        textAnchor="middle"
        style={{
          fontFamily: "system-ui",
          fill: "#000",
          fontSize: "12px",
        }}
      >
        {trip.name}
      </text> */}
    </g>
  );
};

const LocationBubble = ({ location }) => {
  return (
    <g className="location-bubble">
      {location.trips.map((trip, index) => (
        <TripBubble key={index} trip={trip} rotation={trip.rotation} />
      ))}
    </g>
  );
};

export default LocationBubble;
