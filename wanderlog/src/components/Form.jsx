// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from "react";
import Button from './Button'
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useUrlPositioning } from "../hooks/useUrlPositioning";
import { useEffect } from "react";
import Message from './Message'
import Spinner from './Spinner'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useProvider } from "../context/CityContextProvider";



export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {

  const [lat, lng ] = useUrlPositioning()
  const navigate = useNavigate();
  const {addNewCity, isLoading} = useProvider()                  //from my context api

  const [isLoadingGeolocation, setIsLoadingGeolocation] = useState(false)
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState(null)
  const [error, setError] = useState('')

  useEffect(()=>{
    if(!lat && !lng) return;
    fetchLocation()
  },[lat,lng])

  async function fetchLocation(){
    try{
      setIsLoadingGeolocation(true)
      const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
      if(!res.ok){
        throw new Error(`Error fetching response from API`)
      }
      const data = await res.json()
      console.log(data)

      if(!data.countryCode) alert(`Click somewhere else this place dosen't exists 🧐`)

      setCityName(data.city)
      setEmoji(convertToEmoji(data.countryCode))
      setCountry(data.countryName)
      setNotes('')
      setIsLoadingGeolocation(false)
      setError('')
    }
    catch(err){
      setError(err.message)
      console.error(err)
    }
  }


  if(!lat && !lng) return <Message message={'Start by clicking on the map'}/>

  if(isLoadingGeolocation) return <Spinner/>

  console.log(error)

  if (error) return <Message message={error}/>

  async function handleFormData(e){
      e.preventDefault()
      if(notes == '') return;
      console.log('click')
      const newCity = {cityName, country, date, notes, emoji, position:{lat, lng}}
      console.log(newCity)
      await addNewCity(newCity)
      navigate('/app/cities')
  }

  return (
    <form className={`${styles.form}${isLoading ? styles.loading:''}`} onSubmit={(e) => handleFormData(e)}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>

        <DatePicker selected={date} 
                    onChange={(date)=>setDate(date)}
                    dateFormat="dd/MM/yyyy"
                    id = "date"/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type = "primary" >Add</Button>
        <Button type = "back" onClick = {()=>navigate(-1)}>&larr; Back</Button>
      </div>
    </form>
  );
}

export default Form;
