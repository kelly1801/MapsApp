import { PlacesProvider, MapProvider } from "./context";
import { HomePage } from "./screens";
import "./index.css";
const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
         <HomePage />
      </MapProvider>
    </PlacesProvider>
  );
};

export default MapsApp;
