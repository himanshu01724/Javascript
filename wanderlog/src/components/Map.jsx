import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer,TileLayer, Marker, Popup, useMap, useMapEvent} from 'react-leaflet'
import { useState } from 'react';
import { useProvider } from '../context/CityContextProvider';
import { useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import Button from './Button';
import { useUrlPositioning } from '../hooks/useUrlPositioning';

function Map() {
  

  const {city} = useProvider()
  const {isLoading: isLoadingPosition, position: geoLocationPosition, getPosition} = useGeolocation()
  const [lat, lng] = useUrlPositioning()
  
  const [mapPosition, setMapPosition] = useState([28.6, 77.2])

  useEffect(()=>{
      if(lat && lng ) setMapPosition([lat, lng]);
    },[lat, lng])

  useEffect(()=>{
    if(geoLocationPosition)
    setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng])
  }, [geoLocationPosition])

  return (
    <div className = {styles.mapContainer}>
      {!geoLocationPosition && <Button type = "position" onClick={getPosition} >{isLoadingPosition? 'Loading...':'Use your position'}</Button>}
       <MapContainer 
                    center={mapPosition} 
                    zoom={7} 
                    scrollWheelZoom={true} 
                    className = {styles.map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />


      {city.map((item)=>(
      <Marker position={[item.position.lat, item.position.lng]} key = {item.cityName}>
        <Popup>
          {item.cityName} <br /> {item.country}{item.emoji}
        </Popup>

      <ChangeMapPos position={mapPosition} />
      <DetectClick/>
      </Marker>
      ))}


    </MapContainer>
      </div>
  )
}
export default Map;


//function to make the map position dynamic
function ChangeMapPos({position}){
  const map = useMap();
  map.setView(position)
  return null;
}


//funcition for detecting click on the map 
function DetectClick(){

  const navigate = useNavigate()

  useMapEvent({
    click: e => {
      console.log(e)
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)}
  })
}