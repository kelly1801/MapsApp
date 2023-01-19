import { useContext, useState } from "react";
import { PlacesContext, MapContext } from "../context";
import { LoadingPlaces } from "./LoadingPlaces";
import { Feature } from "../interfaces/maps.types";
export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const [activeId, setActiveId] = useState<string>("");
  const selectPlaceOnClick = (place: Feature) => {
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: place.center,
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center
    getRouteBetweenPoints(userLocation, [lng, lat]);

  };
  if (!places.length) {
    return <></>;
  }
  return (
    <>
      {!isLoadingPlaces ? (
        <ul className="list-group mt-3">
          {places.map((place) => (
            <li
              key={place.id}
              onClick={() => selectPlaceOnClick(place)}
              className={` ${
                activeId === place.id ? "active" : ""
              } list-group-item list-group-item-action`}
            >
              <h6>{place.text}</h6>
              <p style={{ fontSize: "12px" }}>{place.place_name}</p>

              <button
                onClick={() => getRoute(place)}
                className={`btn pointer btn-sm ${
                  activeId === place.id
                    ? "btn-outline-light"
                    : "btn-outline-primary"
                }`}
              >
                Address
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <LoadingPlaces />
      )}
    </>
  );
};
