import { Map } from "mapbox-gl";
import { MapState } from "../../interfaces/types";

type MapAction = { type: "setMap"; payload: Map };
export const mapReducer = (state: MapState, action: MapAction): MapState => {
  const { type, payload } = action;
  switch (type) {
    case "setMap":
      return {
        ...state,
        isMapReady: true,
        map: payload,
      };

    default:
      return state;
  }
};
