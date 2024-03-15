import { useContext } from "react";
import { createContext, useState, useEffect} from "react";

const CityData = createContext()

function CityContextProvider({children}){

    const [city, setCity] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    function handleRemove(id){
       const data = city?.cities.filter(item => item.id !== id)
       setCity({cities:data})
    }   

    useEffect(()=>{
        fetchingData()
    },[])

    async function fetchingData(){
        try{
            setIsloading(true)
            const response = await fetch(`../data/cities.json`)
            if(!response.ok){
                throw new Error('Error in network connection')
            }
            const data = await response.json()
            setCity(data)
            setIsloading(false)
        }
        catch(error){
            console.error('Error in fetching data',error)
        }
    }


    function getCity(id){
    const currCity = city?.cities.reduce((acc, item)=>{
        return item.id == id ? item : acc;
      }, null)
    
      setCurrentCity(currCity);
    }

    return(
        <CityData.Provider 
            value = {{city, 
                       isLoading,
                       handleRemove,
                       getCity,
                       currentCity
                       }}
        >{children}
        </CityData.Provider>
    )
}

function useProvider(){
    const context = useContext(CityData);
    return context;
}

export {CityContextProvider, useProvider};