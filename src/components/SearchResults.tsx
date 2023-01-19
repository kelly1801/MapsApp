import { useContext } from "react";
import { PlacesContext } from "../context";
import { LoadingPlaces } from "./LoadingPlaces";
export const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);

  if (!places.length) {
return <></>
  }
  return (
    <>
      {!isLoadingPlaces ? (
        <ul className="list-group mt-3">
          {places.map(({ id, text, place_name }) => (
            <li key={id} className="list-group-item list-group-item-action">
              <h6>{text}</h6>
              <p className="text-muted" style={{ fontSize: "12px" }}>
                {place_name}
              </p>

              <button className="btn btn-sm btn-outline-primary">
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
