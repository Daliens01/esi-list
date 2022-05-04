import { connectdb } from "../../../utils/conn"
import Task from "../../../models/Task"
connectdb()


export default async  function handler(req, res) {
  const tasks = await Task.find()
  

  switch (req.method){
    case "GET":
      console.log(req.method, req.url)
      res.status(200).json({tasks})

    break
    case "POST":
     const newTask = new Task(req.body)
     const saved = await newTask.save()
     res.status(201).json({saved})
    break
    default: return res.status(400).json("no hay nada") 
  }
}
