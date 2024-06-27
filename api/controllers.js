const { json } = require("express")
const { Maquetacion } = require("./models/models")

const getBbdd = async ( req , res , next)=>{

    const buscar = await Maquetacion.find()

    res.json(buscar)

    
}

module.exports = {
    getBbdd,
}