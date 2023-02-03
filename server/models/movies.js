const mongoose=require('mongoose')

const Movieschema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String,},
   image:{type:String,required:true},
    imagetitle:{type:String,default:''},
    imagemin:{type:String,default:false},
    trailer:{type:String},
    video:{type:String},
    year:{type:String},
    limit:{type:Number},
    genre:{type:String},
    isSeries:{type:Boolean,default:false}
},
{timestamps:true});

module.exports = mongoose.model('Movies',Moviesschema)