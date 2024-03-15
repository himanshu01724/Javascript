import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer,TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import { useState } from 'react';
import { useProvider } from '../context/CityContextProvider';
import { useEffect } from 'react';

function Map() {
  const navigate = useNavigate()

  const {city} = useProvider()
  console.log(city)


  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get('lat');
  const lng = searchParam.get('lng');
  
const [mapPosition, setMapPosition] = useState([28.6, 77.2])

useEffect(()=>{
  if(lat && lng ) setMapPosition([lat, lng]);
},[lat, lng])

  return (
    <div className = {styles.mapContainer} onClick = {()=>navigate('form')}>
       <MapContainer 
                    center={mapPosition} 
                    zoom={7} 
                    scrollWheelZoom={true} 
                    className = {styles.map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />


      { city.cities.map((item)=>(
      <Marker position={[item.position.lat, item.position.lng]} key = {item.cityName}>
        <Popup>
          {item.cityName} <br /> {item.country}{item.emoji}
        </Popup>

      <ChangeMapPos position={mapPosition} />
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