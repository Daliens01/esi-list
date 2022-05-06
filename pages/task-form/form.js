import { useState } from "react";
import { Button, Form, Grid} from "semantic-ui-react";
import Router from "next/router";

export default function LicForm(){

        const [newTask, setNewTask] = useState()
        const handleSubmit = async (e) =>{
            console.log(newTask)
            e.preventDefault()
            await add()
            await Router.push("/")
        }
        const add = async () =>{
            
            try{
                await fetch("http://localhost:3000/api/task", {
                    method: "POST", headers: {
                        "Content-Type" : "application/json"
                    }, body: JSON.stringify(newTask)
                })
            }catch (error){
                console.error(error)
            }
        }
        const handleChange = (e) => setNewTask({...newTask, [e.target.name] : e.target.value}  )

    return (
        <Grid centered verticalAlign="middle" columns="3" style={ {height: "50%"}}>
            <Grid.Row>
                <Grid.Column>
                    <h1>AGREGAR ENLACE </h1>
                   <Form  onSubmit={handleSubmit} method="POST">
                          <select  placeholder="Seleccione el tipo de enlace" onChange={handleChange} required name="titleLink">
                          <option disabled selected>Seleccione el tipo de enlace</option>
                                <option value="LICENCIATURA SABATINO-QUIMICA">LICENCIATURA SABATINO-QUIMICA</option>
                                <option value="LICENCIATURA SABATINO-MECATRONICA">LICENCIATURA SABATINO-MECATRONICA</option>
                                <option value="MAESTRIA-MIM">MAESTRIA MIM</option>
                                <option value="MAESTRIA MSH-COATZA">MAESTRIA MSH COATZA</option>
                                <option value="MAESTRIA MSH-MIMC-PUEBLA">MAESTRIA MSH-MIMC PUEBLA</option>
                            </select> 
                        <Form.TextArea  label ="Enlace" placeholder="Enlace" name="link" onChange={handleChange}
                        required  />
                        <Button type="submit" primary> Guardar</Button>
                   </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}