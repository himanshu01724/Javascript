import { useContext } from "react";
import { createContext, useState, useEffect} from "react";

const CityData = createContext()

function CityContextProvider({children})
{

    const [city, setCity] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(()=>{
        fetchingData()
    },[])

    //fetch request
    async function fetchingData(){
        try{
            setIsloading(true)
            const response = await fetch(`http://localhost:8000/cities`)
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

    //For matching id of the city...
    function getCity(id){
    const currCity = city.reduce((acc, item)=>{
        return item.id == id ? item : acc;
      }, null)
    
      setCurrentCity(currCity);
    }


    async function addNewCity(newCity){
        try{
            setIsloading(true)
            const res = await fetch(`http://localhost:8000/cities`,{
                    method:'POST',
                    body:JSON.stringify(newCity),
                    headers:{
                        "Content-Type":"application/json"
                    },
                })
            if(!res.ok){
                throw new Error(`Network error`)
            }
            const data = await res.json()
            console.log(data)
            setCity((item)=>[...item, newCity])
            setIsloading(false)
            }
            
        catch(err){
            console.error(err)
        }
        }

    async function handleRemoveCity(id){
        try{
            const response = await fetch(`http://localhost:8000/cities/${id}`,{
                method:'DELETE',
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(!response.ok){
                throw new Error(`Error in reaching to API`)
            }
            const data = await response.json()
            setCity((item)=>item.filter((val)=>val.id !== id))
            
        }
        catch(err){
            console.error(err)
        }
    }
    

    return(
        <CityData.Provider 
            value = {{city, 
                       isLoading,
                       getCity,
                       currentCity,
                       addNewCity,
                       handleRemoveCity
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