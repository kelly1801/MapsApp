import { PlacesState, PlacesAction } from "../../interfaces/types";


export const placesReducer = ( state:PlacesState, action:PlacesAction): PlacesState => {
  const { type, payload } = action;
  switch (type) {
    case "setUserLocation":
      return {
        ...state,
        isLoading: false,
        userLocation: payload
      };

    default:
      return state;
  }
};
