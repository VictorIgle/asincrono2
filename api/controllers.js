const {bbdd} = require('./bbdd')

const getBbdd = ( req , res , next)=>{
    res.json(bbdd)

    
}

module.exports = {
    getBbdd,
}