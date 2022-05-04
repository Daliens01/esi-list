import { connectdb } from "../../../utils/conn"
import Task from "../../../models/Task"
    connectdb()
export default async (req, res) =>{
   const {method, body, query :{id}} = req

   switch(method){
    case "GET":

    const task = await Task.findById(id)
    if(!Task) return res.status(400).json("sin datos")
    res.status(200).json(task)

    case "PUT":
        const taskUp = await Task.findByIdAndUpdate(id, body, {new: true,})
        if(!taskUp) return res.status(404).json("sin datos")
        res.status(200).json(taskUp)
    break

    case "DELETE":
        const taskDel = await Task.findByIdAndDelete(id)
        if(!taskDel) return res.status(400).json("sin datos")
        res.status(204).json(taskDel)        
    break
    default:
    return res.status(400).json("no soporta nada")
   }

}

