import styles from './CityList.module.css'
import Spinner from './Spinner'
import CityItem from './CityItem'
import Message from './Message'
import { useProvider } from '../context/CityContextProvider'

export default function CityList() {

  const {city, isLoading } = useProvider()


  console.log(city)
  
if(isLoading) return <Spinner/> 

if(city.length<1) return <Message message = {"Add you first city by clicking a city on the map"}/>

  return (
    <>
    <ul className = {styles.cityList}>
    {city.map((item,i)=>(
         <CityItem cityData = {item} key={i} />
    ))}
    </ul>
    </>
  )
}
