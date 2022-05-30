import { DBConection } from "../../../utils/DBConection"
import Task from "../../../models/Task"
import cors from "cors"
import NextCors from 'nextjs-cors'
//import initMiddleware from "../../../lib/init-middleware"

DBConection()


/** const express = require('express')
const cors = require('cors')
const app = express() */

//allow OPTIONS on just one resource


export default async (req, res) =>{
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
  /**  app.use(cors({
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
        origin: '*'
    }));*/
    
   // await cors(req, res)
   const {method, body, query :{id}} = req
    console.log(res)
   switch(method === "OPTIONS"){
    case "GET":

    const task = await Task.findById(id)
    if(!Task) return res.status(400).json("sin datos")
    res.status(200).json(task)
    break

    case "PUT":
        console.log("res")
        console.log(res)
        const taskUp = await Task.findByIdAndUpdate(id, body, {new: true,})
        if(!taskUp) return res.status(404).json("sin datos")
        res.status(200).json(taskUp)
    break

    case "DELETE":
        console.log("res")
        console.log(res)
        const taskDel = await Task.findByIdAndDelete(id)
        if(!taskDel) return res.status(400).json("sin datos")
        res.status(204).json(taskDel)        
    break
    default:
    return res.status(400).json("no soporta nada")
   }

}

