import { PlacesContext } from "./PlacesContext";
import { useReducer, useEffect } from "react";
import { placesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../helpers";
import { PlacesProviderProps, PlacesState } from "../../interfaces/types";

const InitialState: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [state, dispatch] = useReducer(placesReducer, InitialState);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: "setUserLocation", payload: lngLat })
    );
  }, []);
  return (
    <PlacesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
