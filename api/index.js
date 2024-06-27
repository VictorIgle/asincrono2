console.clear()
console.log('Iniciando JS')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const {router} = require('./router')
const PORT = process.env.PORT || 3000

const conectar = async () => mongoose.connect('mongodb://127.0.0.1:27017/Triage')
                    .then( () => console.log('Conectado a MongoDB'))
                    .catch( err => console.log(err.message))

conectar()

const app = express()

    app.use(cors() )
    app.use(express.json() )
    app.use(express.urlencoded({extended:false}) )
    app.use(router)
    


    app.listen(PORT , ()=> console.log('Iniciando API'))
    