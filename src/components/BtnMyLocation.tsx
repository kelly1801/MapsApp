import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);
  const handleClick = () => {
    if (!isMapReady) throw new Error("Map isn't ready");
    if (!userLocation) throw new Error("Map isn't ready");

    map?.flyTo({
      zoom: 18,
      center: userLocation,
    });
  };
  return (
    <button
      onClick={handleClick}
      className="btn btn-primary"
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 999 }}
    >
      My location
    </button>
  );
};
