const mongoose = require('mongoose')

const maquetacionSchema = new mongoose.Schema(
    {nombre : String , titulo : String , descripcion : String , alt_imagen : String , imagen : String , icono : String , svg_ : String , alt_svg : String , 
        id : Number, imagen_ : String , detalles : String , alt_imagen : String , color : String
        , texto : String , logo : String , alt_logo : String
        , titulo_ : String
        , svg : String , alt_icono : String},
 
    {collection : 'Maquetacion' , versionKey : false }

)

module.exports = {
   maquetacionSchema
}