import { useRef, ChangeEvent, useContext } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";
export const SearchBar = () => {
  const { searchPlacesByQuery } = useContext(PlacesContext);
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
        const query = event.target.value
      searchPlacesByQuery(query)
    }, 350);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Look for a place"
        onChange={onQueryChange}
      />
      <SearchResults/>
    </div>
  );
};
