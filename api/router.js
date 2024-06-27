const express = require('express')
const { getBbdd } = require('./controllers')
const router = express.Router()

router.route('/')
    .get(getBbdd)

    router.all('*' , ( req , res , next )=>{
        const err = new Error()
              err.status     = 404 
              err.statusText = `No encuentro el Endpoint`
        next(err)
    })

    router.use(( err , req , res , next )=>{
        let { status , statusText } = err
              status     = status     || 500
              statusText = statusText || `Error interno de mi API`
        res.status(status).json({ status , statusText })
    })









module.exports= {
    router
}