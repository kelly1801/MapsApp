import { createContext } from "react";
import { PlacesContextProps } from "../../interfaces/maps.types";



export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps)
