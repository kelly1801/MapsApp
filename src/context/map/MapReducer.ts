import { Map, Marker } from "mapbox-gl";
import { MapState } from "../../interfaces/types";

type MapAction = 
| { type: "setMap"; payload: Map }
| { type: "setMarkers"; payload: Marker[] }
export const mapReducer = (state: MapState, action: MapAction): MapState => {
  const { type, payload } = action;
  switch (type) {
    case "setMap":
      return {
        ...state,
        isMapReady: true,
        map: payload,
      }
      case "setMarkers":
      return {
        ...state,
        markers: payload,
        
      }
     
     

    default:
      return state;
  }
};
