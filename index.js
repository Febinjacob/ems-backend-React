// 1. import express
const express = require('express');


//2. import cors 
const cors = require('cors');

// import logic
const logic = require('./services/logic')


//3. use cors
const server = express()

//4. use cors
server.use(cors({
    origin: 'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000, () => {
    console.log('listenting on the port 800');
})
//get all employee api
server.get('/getEmployees', (req, res) => {
    logic.allEmployees().then((response) => {
        res.status(response.statusCode).json(response)
    })
})

//add employees api 
server.post('/addEmployees', (req, res) => {
    logic.addEmployees(req.body.id, req.body.name, req.body.age, req.body.designation, req.body.salary)
        .then((response) => {
            res.status(response.statusCode).json(response)
        })
})


//delete Employee api
server.delete('/deleteEmployee/:id', (req, res) => {
    logic.deleteEmployee(req.params.id).then((response) => {
        res.status(response.statusCode).json(response)
    })
})

//get an particular employee
server.get('/getAnEmployee/:id', (req, res) => {
    logic.getAnEmp(req.params.id).then((response) => {
        res.status(response.statusCode).json(response)
    })
})

//update an employee details
server.post('/updateAnEmployee/:id',(req,res)=>{
    logic.updateAnEmp(req.params.id,req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response) 
    })
    
})
