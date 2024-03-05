import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import Login from './pages/Login'
import AppLayout from "./pages/AppLayout"
import CityList from "./components/CityList"
import CountryList from './components/CountryList'
import City from './components/City'
import Form from './components/Form'


export default function App(){

    const [city, setCity] = useState([]);
    const [isLoading, setIsloading] = useState(false);

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

    return(
        <BrowserRouter>
        <Routes>
            <Route exact path = "/" element = {<Homepage/>} />
            <Route path = "product" element = {<Product/>}/>
            <Route path = "price" element = {<Pricing/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "app" element = {<AppLayout/>}>
                <Route index element = {<Navigate to = 'cities'/>}/>
                    <Route path = "cities" element = {<CityList city = {city} isLoading = {isLoading} handleRemove = {handleRemove}/>}/>
                    <Route path = "cities/:id" element = {<City city = {city}/>}/>
                    <Route path = "countries" element = {<CountryList city = {city} isLoading = {isLoading}/>}/>
                    <Route path = "form" element = {<Form/>}/>
                </Route>
            <Route path = "*" element = {<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}