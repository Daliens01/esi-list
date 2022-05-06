import { connect, connection } from "mongoose";


const conn = {
    Isconnected: false
}

export async function DBConection (){
    if (conn.Isconnected) return
    const db = await connect(process.env.MONGODB_URL)

    conn.Isconnected = db.connections[0].readyState

    
}

connection.on("connected", ()=>{
    console.log("mongodb is connected")
})


connection.on("error", (err)=>{
    console.log(err)
})