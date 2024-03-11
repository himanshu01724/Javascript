import styles from './CityItem.module.css'
import {Link} from 'react-router-dom'

export default function CityItem({cityData, handleRemove}) {

    const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

console.log(cityData)

const {emoji, cityName, country, date, id, position} = cityData;
console.log(position)
  return (<>
    <li >
        <Link className = {styles.cityItem} to = {`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className = {styles.emoji}>{emoji}</span>
        <h3 className = {styles.name}>{cityName}</h3>
        <time className = {styles.date}>{formatDate(date)}</time>
        <button className = {styles.deleteBtn} 
                onClick={()=>handleRemove(id)}
        >x</button>
        </Link>
    </li>
    
    
</>
  )
}