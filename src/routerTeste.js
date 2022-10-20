import { Router } from "express";



const routesTeste = new Router();



routesTeste.get("/1",  (req,res)=>{
    return res.send("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  })

routesTeste.get("/2",  (req,res)=>{
    return res.send("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  })



export default routesTeste;