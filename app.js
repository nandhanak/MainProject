const express=require('express')
const app=new express();
require('dotenv').config();
const connetDB=require('./config/db')
const UserRouterr=require ('./routes/user/index');
const cookieParser = require('cookie-parser');

const port=process.env.PORT
connetDB()
app.use (cookieParser());
app.use (express.json());

app.use('/api/v1/user',UserRouterr);



app.get('/',(req,res)=>{
   res.send("welcome project");
})




app.listen(process.env.PORT,()=>{
    console.log("welcome new project")
})