import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'

function Map() {
  const navigate = useNavigate()


  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get('lat');
  const lng = searchParam.get('lng');
  console.log(lat,lng)

  return (
    <div className = {styles.mapContainer} onClick = {()=>navigate('form')}>
      <h1>Pos {lat}, {lng}</h1>
      <button onClick={()=>{setSearchParam({lat:24, lng:100})}}>Change pos</button>
      </div>
  )
}

export default Map