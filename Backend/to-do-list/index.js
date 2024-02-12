const express = require('express')
const fs = require('fs')
const mysql = require('mysql')
const cors = require('cors');


const app = express()
const port = 5001
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST','DELETE'],
    allowedHeaders: ['Content-Type', 'api-key'],
}));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'todo'
})

connection.connect((err)=>{
    if(err){
        console.log(`Error Connecting to db ${err}`)
        return
    }
    else{
        console.log(`Connection Successfull`)
    }
})


const api_key = '837703'

function MiddleWare(req,res,next){
    const incomingAPiKey = req.headers['api-key'];
    if(!incomingAPiKey || incomingAPiKey !== api_key){
        return res.status(400).json({error:'Invalid API key'})
    }
    next();
}

app.use(MiddleWare)
app.use(express.json())



app.get('/data',(req,res)=>{
    connection.query(`SELECT *FROM todolist`,(err,result)=>{
        if(err){
            console.error(`Error querying mysql`,err)
            res.status(500).json({error:`Internal Server Error`})
        }
        res.header("Access-Control-Allow-Origin","*")
        res.status(200).json({status:"Success",data:result})
        console.log(`Data Fetch Successfull`)
    })
})

app.post('/addingItem',(req,res)=>{
    const {Item} = req.body;
    connection.query(`INSERT INTO todolist (Item) value (?)`,[Item],(err,result)=>{
        if(err){
            console.error(`Error querying mysql`,err)
            res.status(500).json({error:`Internal Server Error`})
        }
        connection.query(`SELECT *FROM todolist`,(err,results)=>{
            if(err){
                console.error(`Error querying mysql`,err)
                res.status(500).json({error:`Internal Server Error`})
            }
            res.status(200).json({status:'Success',data:results})
        })
    })
})

app.delete('/data/:delete',(req,res)=>{
    const id = req.params.delete;
    connection.query('DELETE FROM todolist where id = (?)',[id],(err,result)=>{
        if(err){
            console.error(`Error querying mysql ${err}`)
            res.status(500).json({status:`Internal Server Error`})
        }
        connection.query(`SELECT *FROM todolist`,(err,result)=>{
            if(err){
                console.error(`Error querying mysql ${err}`)
                res.status(500).json(`Internal Server Error`)
            }
            res.status(200).json({status:'Success',data:result})
        })
    })
})

app.listen(port,()=>{
    console.log(`Running on ${port}`)
})


process.on('SIGINT',()=>{
    connection.end()
    process.exit()
});