import { PlacesProvider } from "./context"
import { HomePage } from "./screens"
import './index.css'
const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomePage/>
    </PlacesProvider>
  )
}

export default MapsApp