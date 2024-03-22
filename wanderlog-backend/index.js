const express = require('express')
const fs = require('fs')
const {v4 : uuidv4} = require('uuid')
const cors = require('cors')


const port = process.env.PORT || 8001;

const app = express()

app.use(express.json())
app.use(cors())

const cities = JSON.parse(fs.readFileSync('./data/cities.json'))


app.get('/cities', (req, res) => {
    
    res.status(200).send(cities)
})

app.post('/cities', (req, res) =>{
    
    const newCity = req.body;

    // newCity.id = uuidv4()

    cities.push(newCity)

    fs.writeFile('./data/cities.json', JSON.stringify(cities), (err)=>{
        if(err){
            res.status(500).json({err})
        }
        else{
            
            console.log(`Cities data modified success`)
            res.status(200).json({message:'Success'})
        }
    })
})

app.delete('/cities/:id',(req, res)=>{
    
    const id = req.params.id;
    const index = cities.findIndex(item => item.id === id )
    if(index  != -1){
        
        cities.splice(index, 1);
        fs.writeFileSync('./data/cities.json', JSON.stringify(cities, null, 2));
        res.status(200).json({message:`city with ${id} deleted successfully`})
    }
    else{
        res.status(404).json({message:`${id} not found`})
    }
})

app.get('/cities/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id)
    const currentCity = cities.find((item)=>item.id === id)
    if(currentCity){
        console.log(`city with ${id} found successfully`)
        res.status(200).send(currentCity)
    }
    else{
        res.status(404).json({message:'user not found'})
    }
})

app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})