import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import Login from './pages/Login'
import AppLayout from "./pages/AppLayout"



import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path = "/" element = {<Homepage/>} />
            <Route path = "product" element = {<Product/>}/>
            <Route path = "price" element = {<Pricing/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "app" element = {<AppLayout/>}>
                <Route index element = {<h1>Index Route</h1>}/>
                    <Route path = "cities" element = {<p>List of Citites</p>}/>
                    <Route path = "countries" element = {<p>Countries</p>}/>
                    <Route path = "form" element = {<p>Form Route</p>}/>
            </Route>
            <Route path = "*" element = {<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}