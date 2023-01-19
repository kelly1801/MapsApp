/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useRef, useLayoutEffect } from "react";
import { PlacesContext, MapContext } from "../context";
import { LoadingMap } from "../components";
//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map } from "!mapbox-gl";
export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!,
        style: "mapbox://styles/mapbox/dark-v10",
        center: userLocation,
        zoom: 14,
      });
      setMap(map);
    }
  }, [isLoading]);
  if (isLoading) {
    return <LoadingMap />;
  }
  return (
    <div ref={mapDiv} className="map-container">
      
    </div>
  );
};
