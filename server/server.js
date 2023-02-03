const express=require('express')
const mongoose=require('mongoose')

const app=express()

app.listen(8800,()=>{
    console.log('port listened')
})

mongoose.connect('mongodb+srv://movies:movies@movies.lnfqjr7.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('database connected')
})