import { PlacesProvider } from "../context"
import { MapView } from "../components"
export const HomePage = () => {
  return (
    <PlacesProvider>
        <>
        <MapView/>
        </>
    </PlacesProvider>
  )
}