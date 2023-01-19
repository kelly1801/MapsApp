import { createContext } from "react";
import { PlacesContextProps } from "../../interfaces/types";



export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps)
