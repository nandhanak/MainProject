const mongoose=require('mongoose');
require('dotenv').config();



const connetDB=async()=>{
    console.log(process.env.DB_URL);
    try{

   await mongoose.connect(process.env.DB_URL)
   
  console.log("mongoose connected");
      }
     catch(error){
        console.log("error in db",error);

     }
    }
module.exports=connetDB;