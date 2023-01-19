import { useReducer } from "react";
import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { mapReducer } from "./MapReducer";
import { MapState, MapsProviderProps } from "../../interfaces/types";


const Initial_State: MapState = {
  isMapReady: false,
  map: undefined,
}

export const MapProvider = ({ children }: MapsProviderProps) => {
  const [state, dispatch] = useReducer(mapReducer, Initial_State);
  const myLocationPopUp = new Popup()
  .setHTML(`<h4>I'm here</h4>
  <p>In a place in the world</p>
  `)
  const setMap = (map: Map) => {
    new Marker({color: "#A997DF"}).setLngLat(map.getCenter()).addTo(map).setPopup(myLocationPopUp);

    dispatch({ type: "setMap", payload: map });
  }
 
  return (
    <MapContext.Provider value={{ ...state, setMap }}>
      {children}
    </MapContext.Provider>
  );
};
