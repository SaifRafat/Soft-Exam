const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({
    name:{type:String},
    image:{type:String},
    breed:{type:String},
    color:{type:String},
    height:{type:String},
    description:{type:String}    
    
}, {timestamps: true})

const Dogs = mongoose.model('Dogs', dogSchema)
module.exports = Dogs