import { Map } from "mapbox-gl";
export interface MapState {
  isMapReady: boolean;
  map?: Map;
}
export interface MapsProviderProps {
  children: JSX.Element | JSX.Element[];
}
export interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  setMap: (map: Map) => void;
}
export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [ number, number ];

}
export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
  }
 export interface PlacesProviderProps {
    children: JSX.Element | JSX.Element[];
  }
export interface PlacesAction {
    type: "setUserLocation";
    payload: [number, number];
  };
  