const mongoose=require('mongoose')

const Listschema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    type:{type:String,},
    genre:{type:String},
    Content:{type:Array}
},
{timestamps:true});

module.exports = mongoose.model('lists',Listschema)