import { useProvider } from '../context/CityContextProvider';
import styles from './CityItem.module.css'
import {Link} from 'react-router-dom'

export default function CityItem({cityData}) {

    

    const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));



const {currentCity, handleRemoveCity} = useProvider()
const {emoji, cityName, country, date, id, position} = cityData;

function handleDelete(e){
  e.preventDefault();
  handleRemoveCity(id)
}

console.log(position)
  return (<>
    <li >
        <Link className = {`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active']:''}`} to = {`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className = {styles.emoji}>{emoji}</span>
        <h3 className = {styles.name}>{cityName}</h3>
        <time className = {styles.date}>{formatDate(date)}</time>
        <button className = {styles.deleteBtn} 
                onClick={handleDelete}
        >x</button>
        </Link>
    </li>
    
    
</>
  )
}
