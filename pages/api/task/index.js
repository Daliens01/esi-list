import { DBConection } from "../../../utils/DBConection"
import Task from "../../../models/Task"
import cors from 'cors'
//import initMiddleware from "../../../lib/init-middleware"

DBConection()
/**const cors = Cors({
  methods: ['GET', 'HEAD'],
})*/

/** function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
} */
export default async  function handler(req, res) {
  cors()
  console.log("index api")
  //await cors(req, res)
 // await runMiddleware(req, res, cors)
  const tasks = await Task.find()
  
  switch (req.method){
    case "GET":
      
      console.log("ver")
      //console.log(req.method, req.url)
      res.status(200).json({tasks})
    break

    case "POST":
      console.log("agregar")
      console.log(req.body)
     const newTask = new Task(req.body)
     const saved = await newTask.save()
     res.status(201).json({saved})
    break
    
    default: return res.status(400).json("no hay nada") 
  }


}
