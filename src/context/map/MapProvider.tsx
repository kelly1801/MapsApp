import { useReducer, useContext, useEffect } from "react";
import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { mapReducer } from "./MapReducer";
import { MapState, MapsProviderProps } from "../../interfaces/types";
import { PlacesContext } from "../places/PlacesContext";

const Initial_State: MapState = {
  isMapReady: false,
  map: undefined,
  markers: [],
};

export const MapProvider = ({ children }: MapsProviderProps) => {
  const [state, dispatch] = useReducer(mapReducer, Initial_State);
  const { places } = useContext(PlacesContext);

  useEffect(() => {
    state.markers.forEach((marker) => marker.remove());

    const newMarkers: Marker[] = [];

    for (const place of places) {

      const [lng, lat] = place.center;

      const popup = new Popup()
      .setHTML(`
          <h6>${place.text}</h6>
          <p>${place.place_name}</p>
      `);

      const newMarker = new Marker({ color: "#A997DF" })
        .setPopup(popup)
        .setLngLat([lng, lat])
        .addTo(state.map!);

      newMarkers.push(newMarker);
    }

    dispatch({type: "setMarkers", payload: newMarkers})
  }, [places]);
  const myLocationPopUp = new Popup().setHTML(`<h4>I'm here</h4>
  <p>In a place in the world</p>
  `);
  const setMap = (map: Map) => {
    new Marker({ color: "#A997DF" })
      .setLngLat(map.getCenter())
      .addTo(map)
      .setPopup(myLocationPopUp);

    dispatch({ type: "setMap", payload: map });
  };

  return (
    <MapContext.Provider value={{ ...state, setMap }}>
      {children}
    </MapContext.Provider>
  );
};
