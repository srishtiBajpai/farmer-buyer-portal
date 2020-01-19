const mongoose=require('mongoose')
const configs=require('../configs/config')
// const validator=require('validator')

mongoose.connect(configs.DB,{useNewUrlParser:true,useUnifiedTopology:true}).then(conn=>{
    console.log("crops DB connected")
    // console.log(conn)
})

const cropSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    photo:{
// sir se puchna h
    type:String
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    description:{
        type:String
    },
    expiry_date:{
        type: Date, 
        default: Date.now
    }
})

const cropModel=mongoose.model('cropModel',cropSchema)
module.exports=cropModel