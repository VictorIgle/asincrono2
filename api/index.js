console.clear()
console.log('Iniciando JS')

const express = require('express')
const cors = require('cors')
const {router} = require('./router')
const PORT = process.env.PORT || 3000

const app = express()

    app.use(cors() )
    app.use(express.json() )
    app.use(express.urlencoded({extended:false}) )
    app.use(router)
    


    app.listen(PORT , ()=> console.log('Iniciando API'))
    