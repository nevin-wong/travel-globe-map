const Locations = [
  {
    name: "New York City",
    coordinates: [-74.006, 40.7128],
    trips: [
      { year: 2018, people: [2, 3, 6] },
      { year: 2023, people: [2, 3, 6] },
      { year: 2024, people: [2, 3, 6] },
      { year: 2024, people: [2, 6] },
    ],
  },
  {
    name: "Toronto",
    coordinates: [-79.3832, 43.6532],
    trips: [
      { year: 2017, people: [3, 2, 6] },
      { year: 2018, people: [3, 2, 6] },
      { year: 2018, people: [3, 2, 6] },
      { year: 2023, people: [3, 1, 6] },
      { year: 2024, people: [3, 2, 6] },
      { year: 2024, people: [3, 4, 6] },
      { year: 2024, people: [3, 5, 6] },
    ],
  },
  {
    name: "Montreal",
    coordinates: [-73.5673, 45.5017],
    trips: [{ year: 2024, people: [3, 4, 6] }],
  },
  {
    name: "Philadelphia",
    coordinates: [-75.1652, 39.9526],
    left: 1,
    trips: [
      { year: 2018, people: [2, 3, 6] },
      { year: 2019, people: [2, 4] },
      { year: 2023, people: [2, 3, 6] },
      { year: 2024, people: [2, 3, 6] },
      { year: 2024, people: [2, 6] },
      { year: 2024, people: [2, 1] },
    ],
  },
  {
    name: "San Francisco",
    coordinates: [-122.4194, 37.7749],
    left: 1,
    trips: [
      { year: 2023, people: [3, 5] },
      { year: 2024, people: [3, 5, 6] },
      { year: 2024, people: [1, 5, 6] },
    ],
  },
  {
    name: "Seattle",
    coordinates: [-122.3321, 47.6062],
    left: 1,
    trips: [
      { year: 2022, people: [2, 8] },
      { year: 2024, people: [1, 3, 4, 6, 8] },
    ],
  },
  {
    name: "Vancouver",
    coordinates: [-123.1216, 49.2827],
    left: 1,
    trips: [{ year: 2024, people: [1, 3, 4, 6] }],
  },
  {
    name: "Tokyo",
    coordinates: [139.6917, 35.6895],
    trips: [{ year: 2023, people: [2, 4] }],
  },
  {
    name: "Seoul",
    coordinates: [126.978, 37.5665],
    left: 1,
    trips: [{ year: 2019, people: [6, 2] }],
  },
  {
    name: "Sydney",
    coordinates: [151.2093, -33.8688],
    trips: [{ year: 2023, people: [3, 5, 7] }],
  },
  {
    name: "Queenstown",
    coordinates: [168.6626, -45.0312],
    left: 1,
    trips: [{ year: 2023, people: [3, 5, 7] }],
  },
  {
    name: "Lake Tekapo",
    coordinates: [170.5167, -44.0036],
    trips: [{ year: 2023, people: [3, 5, 7] }],
  },
  {
    name: "Los Angeles",
    coordinates: [-118.2437, 34.0522],
    left: 1,
    trips: [
      { year: 2017, people: [3, 8] },
      { year: 2019, people: [2, 5] },
      { year: 2019, people: [2, 8] },
      { year: 2022, people: [2, 3, 5, 8, 6] },
      { year: 2024, people: [1, 5, 6] },
    ],
  },
];

export default Locations;
