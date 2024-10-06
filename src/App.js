import "./App.css";
import Map from "./components/Map";
import Header from "./components/Header";
import { LocationsProvider } from "./contexts/LocationsContext";

function App() {
  return (
    <LocationsProvider>
      <div className="App">
        <div className="map-container">
          <Header />
          <Map />
        </div>
      </div>
    </LocationsProvider>
  );
}

export default App;
