import Error from "next/error"
import {Button, Grid, Form, Confirm,  Icon} from "semantic-ui-react"
import  {useState}  from "react";
import {useRouter}  from "next/router";

export default function View({task, error}){
    const [first, setfirst] = useState(false)
    const [isdelete, setIsdelete] = useState(false)
    const [isupdate, setisupdate] = useState()
    const open = ()=> setfirst(true)
    const close = ()=> setfirst(false)
    const {query, push} = useRouter()

    if(error && error.statusCode) return <Error statusCode={error.statusCode} title={error.statusText}/>
  
    const Del = async () =>{
        const {id} = query
        try {
            
            await fetch(`https://esi-list.vercel.app/api/task/${id}`, {
                method: "DELETE",
                headers: { "Access-Control-Allow-Origin": "https://esi-list.vercel.app","server" : "Vercel",
                "Content-Type" : "application/json"}, body: JSON.stringify(isdelete)})
        } catch (error) {
            console.error("error de eliminar")
            console.error(error)
        }
       
    }

    const handleDelete = async(e)=>{
        e.preventDefault()
        setIsdelete(true)
        await Del()
        close()
        await push("/")
    }
    const handleUp = async (e) =>{
        e.preventDefault()
        await update()
        await push("/")
    }
    const update = async () =>{
        const {id} = query
        
        try{
            await fetch(`https://esi-list.vercel.app/api/task/${id}`, {
                method: "PUT", headers: { "Access-Control-Allow-Origin": "https://esi-list.vercel.app", "server" : "Vercel", 
                "strict-transport-security" : "max-age=63072000; includeSubDomains; preload",
                    "Content-Type" : "application/json"
                }, body: JSON.stringify(isupdate)
            })
        }catch (error){
            console.error("error de actualizar")
            console.error(error)
        }
    }

    const handleChange = (e) => setisupdate({...isupdate, [e.target.name] : e.target.value}  )
    return(
        <Grid centered verticalAlign="middle" columns="3" style={ {height: "50%"}}>
            <Grid.Row>
                <Grid.Column>
                    <h1>Editar {task.titleLink} </h1>
                   <Form onSubmit={handleUp} method="POST">
                        <select  placeholder="Seleccione el tipo de enlace" onChange={handleChange} required name="titleLink">
                          <option disabled selected>Actual: {task.titleLink}</option>
                                <option value="LICENCIATURA SABATINO-QUIMICA">LICENCIATURA SABATINO-QUIMICA</option>
                                <option value="LICENCIATURA SABATINO-MECATRONICA">LICENCIATURA SABATINO-MECATRONICA</option>
                                <option value="MAESTRIA-MIM">MAESTRIA MIM</option>
                                <option value="MAESTRIA MSH-COATZA">MAESTRIA MSH COATZA</option>
                                <option value="MAESTRIA MSH-MIMC-PUEBLA">MAESTRIA MSH-MIMC PUEBLA</option>
                            </select> 
                        <Form.TextArea label ="Enlace" placeholder="Enlace" name="link" defaultValue={task.link} onChange={handleChange}
                        required />
                        <Button  type="submit" color="green" style={{'float' : 'left'}} icon 
                        labelPosition='right' >Actualizar <Icon name="edit outline" /></Button>
                   </Form>    
                   <Button color="red" onClick={open} loading={isdelete} labelPosition='right' 
                   style={{'position' : 'relative', height: '20%'}} icon> Eliminar <Icon name="delete" /></Button>
                </Grid.Column>
            </Grid.Row>
            <Confirm header="Atencion" content="Desea eliminar el enlace?"  
            style={ {height: "20%", 'text-align': 'center',  'left': '25%'}}
            className="mx-auto" open={first} onConfirm={handleDelete} onCancel={close}
            cancelButton="Cancelar" confirmButton="Eliminar" />
        </Grid>
    )
}

export async function getServerSideProps({query: {id}}){
   const res = await fetch(`https://esi-list.vercel.app/api/task/${id}`)
    if(res.status === 200){
        const task = await res.json()
        return(
            {
                props: {task}
            }
        )
    }
    return(
        {
            props: {
                error:{
                    statusCode: res.status,
                    statusText: "Identificador invalido"
                }
            }
        }
    )
}