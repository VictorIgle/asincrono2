const mongoose = require('mongoose')
const { maquetacionSchema } = require('../schema/schema')

const Maquetacion = mongoose.model('Maquetacion' , maquetacionSchema)


module.exports = {
 Maquetacion
}