import { PlacesContext } from "./PlacesContext";
import { useReducer, useEffect } from "react";
import { placesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../helpers";
export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}
interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}
const InitialState: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export const PlacesProvider = ({ children }: ProviderProps) => {
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
