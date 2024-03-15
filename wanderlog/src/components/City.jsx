import styles from "./City.module.css";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useProvider } from "../context/CityContextProvider";
import Button from "./Button";
import { useEffect } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));



function City() {

const {id} = useParams()
const navigate = useNavigate()
const [searchParam, setSearchParam] = useSearchParams()
const lat = searchParam.get('lat')
const lng = searchParam.get('lng')


const {getCity, currentCity} = useProvider()

useEffect(()=>{
  getCity(id)
}, [id])

const { cityName, emoji, date, notes } = currentCity;        //here I have to destructure the currCity object... 
  
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <Button type = "back" onClick = {()=>navigate(-1)}>&larr;Back</Button>
        </div>
    </div>
  );
}

export default City;
