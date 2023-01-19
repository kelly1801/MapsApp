import { Map, Marker } from "mapbox-gl";

export interface PlacesResponse {
  type: string;
  query: number[];
  features: Feature[];
  attribution: string;
}

export interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  center: [number, number];
  geometry: Geometry;
  context: Context[];
}

export interface Context {
  id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  accuracy: string;
}

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}
export interface MapsProviderProps {
  children: JSX.Element | JSX.Element[];
}
export interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  setMap: (map: Map) => void;
  getRouteBetweenPoints: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>;
}


export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
  searchPlacesByQuery: (query: string) => Promise<Feature[]>;
}
export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}
export interface PlacesProviderProps {
  children: JSX.Element | JSX.Element[];
}
export type PlacesAction =
  | { type: "setUserLocation"; payload: [number, number] }
  | { type: "setPlaces"; payload: Feature[] }
  | { type: "setLoadingPlaces" };
