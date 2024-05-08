const jwtVerify=require("jsonwebtoken")
const Secretkey=process.env.SE;


const genereteToken=(email)=>{
    return jwtVerify.sign({data:email},Secretkey,{expiresIn:"1d"});
};
module.exports=genereteToken;