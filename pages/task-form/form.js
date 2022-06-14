import { useState } from "react";
import { Button, Form, Grid} from "semantic-ui-react";
import Router from "next/router";

//Agrega un link a la base de datos para poder ser vista en el menu principal de la aplicacion
export default function LicForm(){
        const [newTask, setNewTask] = useState();
        const handleSubmit = async (e) =>{
            e.preventDefault();
            await add();
            await Router.push("/");
        }
        const add = async () =>{
            
            try{
                await fetch("https://api-daliens01.vercel.app/api/options", {
                    method: "POST", headers: { 
                        "Content-Type" : "application/json"
                    }, body: JSON.stringify(newTask)
                }).then((response) => Promise.all([response.json(), response.headers])).then(([body, headers] )=>{
                    const auth = headers.get("link");
                    console.log(auth);
            })
            }catch (error){
                console.error("error al agregar");
                console.error(error);
            }
        }
        const handleChange = (e) => setNewTask({...newTask, [e.target.name] : e.target.value}  );

    return (
        <Grid centered verticalAlign="middle" columns="3" >
            <Grid.Row>
                <Grid.Column id="formGrid">
                    <h1>AGREGAR ENLACE </h1>
                   <Form  onSubmit={handleSubmit} method="POST" >
                          <select  placeholder="Seleccione el tipo de enlace" onChange={handleChange} required name="titleLink">
                          <option disabled selected>Seleccione el tipo de enlace</option>
                                <option value="LICENCIATURA SABATINO-QUIMICA">LICENCIATURA SABATINO-QUIMICA</option>
                                <option value="LICENCIATURA SABATINO-MECATRONICA">LICENCIATURA SABATINO-MECATRONICA</option>
                                <option value="MAESTRIA-MIM">MAESTRIA MIM</option>
                                <option value="MAESTRIA MSH-COATZA">MAESTRIA MSH COATZA</option>
                                <option value="MAESTRIA MSH-MIMC-PUEBLA">MAESTRIA MSH-MIMC PUEBLA</option>
                            </select> 
                        <Form.Input  label ="Enlace" placeholder="Enlace" name="link" onChange={handleChange}
                        required pattern="https?://docs.google.com/spreadsheets/d/.*/.*" 
                        title="Debe ingresar un link de Google Drive" 
                        maxlength="100" style={{"height":"60px"}} />
                        <Button type="submit" name="button" primary> Guardar</Button>
                   </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}