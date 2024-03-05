import styles from './CityList.module.css'
import Spinner from './Spinner'
import CityItem from './CityItem'
import Message from './Message'

export default function CityList({city, isLoading, handleRemove}) {
    console.log(city)
  
if(isLoading) return <Spinner/> 

if(city.cities.length<1) return <Message message = {"Add you first city by clicking a city on the map"}/>

  return (
    <>
    <ul className = {styles.cityList}>
    {city?.cities.map((item,i)=>(
         <CityItem cityData = {item} key={item.id} handleRemove = {handleRemove}/>
    ))}
    </ul>
    </>
  )
}
