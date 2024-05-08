const userrrouter=require ('../user/userroute')

userrrouter.use("/user",userrrouter);

module.exports=userrrouter;