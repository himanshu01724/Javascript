import React,{useState} from 'react'
import "./index.css"

function AirQuality(){
    return(
        <div className = "container">
            <table className = "table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Division</th>
                        <th>Country Code</th>
                        <th>Carbox Oxide</th>
                        <th>Nitroger Oxide</th>
                        <th>Ozone</th>
                        <th>PM10</th>
                        <th>PM25</th>
                        <th>So2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


function CurrWeather({weather}){
    return(
        <div className="container">
            <table className="table">
            <thead>
                <tr>
                <th>Time Zone</th>
                <th>Country Code</th>
                <th>Visibility</th>
                <th>Summary</th>
                <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{weather?.data?.timezone}</td>
                <td>{weather?.data?.country_code}</td>
                <td>{weather?.data?.visibility}</td>
                <td>{weather?.data?.summary}</td>
                <td>{weather?.data?.updatedAt}</td>
                </tr>
                {/* <tr>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
                </tr> */}
            </tbody>
            </table>
        </div>
    )
}

function App() {

const [data,setData] = useState([null]);
const [airQuality,setAirQuality] = useState([])
const [test,setTest] = useState(false)

async function handleAirQualityData(){
    try{
        const response = await fetch(`https://api.ambeedata.com/latest/by-lat-lng?lat=12&lng=77`,{
            headers:{
                'Content-Type':'application/json',
                'x-api-key': 'd243415c941881df344bef21c4d45e272f0d1ad0dd3ca546d7dbc4eb0d7057f8'
            }
        })
        if(!response.ok){
            throw new Error(`Network error while fetching data`)
        }
        const air = await response.json()
        console.log(air)
    }
    catch(error){
        console.error(`Error While fetching data ${error}`)
    }
}

async function handleGetData(){
    try{
        const response = await fetch(`https://api.ambeedata.com/weather/latest/by-lat-lng?lat=12&lng=77`,{
            headers:{
                'Content-Type': 'application/json',
                'x-api-key':'d243415c941881df344bef21c4d45e272f0d1ad0dd3ca546d7dbc4eb0d7057f8'
            }
        })
        if(!response.ok){
            throw new Error(`Network Erro While fetching data`)
        }
        const newData = await response.json()
        setTest(true)
        setData(newData)
    }
    catch(error){
        console.error(`Error While Fetching Data ${error}`)
    }
}

  return (
    <div>
        <div style = {{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
        <h2 style = {{textAlign:'center'}} >Weather Application</h2>
        <button onClick={handleGetData}>Get</button>
        </div>
        {test && <CurrWeather weather = {data}/>}
        
        
        <div style = {{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
        <h2 style = {{textAlign:'center'}}>Latest Air Quality</h2>
        <button onClick={handleAirQualityData}>Get</button>
        </div>
        <AirQuality/>
    </div>
  )
}

export default App