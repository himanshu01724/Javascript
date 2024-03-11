import styles from './CountryList.module.css'
import Spinner from './Spinner'
import CountryItem from './CountryItem'
import Message from './Message'

export default function CountryList({city, isLoading, handleRemove}) {
  
if(isLoading) return <Spinner/> 

if(city.cities.length<1) return <Message message = {"Add you first city by clicking a city on the map"}/>

const countries = city?.cities.reduce((acc, item)=>{
    acc.push({country:item.country, emoji:item.emoji})
    return acc
},[])



  return (
    <>
    <ul className = {styles.countryList}>
    {countries?.map((item,i)=>(
        <CountryItem country = {item} handleRemove = {handleRemove}/>
    ))}
    </ul>
    </>
  )
}