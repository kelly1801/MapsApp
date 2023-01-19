import { PlacesContext } from "./PlacesContext";
import { useReducer, useEffect } from "react";
import { placesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../helpers";
import {
  Feature,
  PlacesProviderProps,
  PlacesResponse,
  PlacesState,
} from "../../interfaces/types";
import { searchApi } from "../../apis";

const InitialState: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

export const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [state, dispatch] = useReducer(placesReducer, InitialState);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: "setUserLocation", payload: lngLat })
    );
  }, []);

  const searchPlacesByQuery = async (query: string): Promise<Feature[]> => {
    if (!query.length) {
      dispatch({ type: "setPlaces", payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error("There is nor location available");

    dispatch({ type: "setLoadingPlaces" });
    const { data } = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(","),
      },
    });
    dispatch({ type: "setPlaces", payload: data.features });
    return data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByQuery,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
