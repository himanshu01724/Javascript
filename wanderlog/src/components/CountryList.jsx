import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useProvider } from "../context/CityContextProvider";

export default function CountryList() {
  const { city, isLoading } = useProvider();

  if (isLoading) return <Spinner />;

  if (city.length < 1)
    return (
      <Message message={"Add you first city by clicking a city on the map"} />
    );

  const countries = city.reduce((acc, item) => {
    acc.push({ country: item.country, emoji: item.emoji });
    return acc;
  }, []);

  return (
    <>
      <ul className={styles.countryList}>
        {countries?.map((item, i) => (
          <CountryItem country={item} key={i} />
        ))}
      </ul>
    </>
  );
}
