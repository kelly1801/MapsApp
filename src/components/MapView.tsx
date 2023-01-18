import { useContext, useRef, useLayoutEffect } from 'react'
import { PlacesContext } from '../context'
import { LoadingMap } from '../components'
import { Map } from 'mapbox-gl'
export const MapView = () => {
 const {isLoading, userLocation} = useContext(PlacesContext)
 const mapDiv = useRef<HTMLDivElement>(null)
 
 useLayoutEffect(() => {

    if (!isLoading) {
        const map = new Map({
            container: mapDiv.current!, 
            style: 'mapbox://styles/mapbox/streets-v12', 
            center: userLocation, 
            zoom: 14, 
            });
    }
 }, [isLoading, userLocation])
 if (isLoading) {
    return (<LoadingMap/>)
 }
    return (
    <div ref={mapDiv} className="map-container">
        {userLocation?.join(',')}
    </div>
  )
}

