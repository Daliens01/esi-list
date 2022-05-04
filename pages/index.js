import { Button, Image, Card, Icon, Container, Grid } from "semantic-ui-react"
import {push} from "next/router"

/* 
 Si existe un error en props, al iniciar map. Se especifica el nombre del json. 
 Por ejemplo: si props :data y escribimos data.map(), nos marcará error, pues en el json de la DB tiene un nombre, el cual debemos poner en el
 map como data.[nombre de la coleccion].map()
             ERROR DE LIC-FORM, NO INGRESA DATOS EL select (INGRESA SIN DATOS AL JSON)
             

*/ 
export default function Home({task}) {
  if (task.length === 0) return (
    <Grid centered  verticalAlign="middle" columns="1" >
    <Grid.Row>
        <Grid.Column textAlign="center">
          <h1><i>No hay listas elazadas para verse</i></h1>
          <Image alt="none" src="https://eztoro.com/static/svg/no_data.svg"/>
      
    <div>
      <Button primary>
        Enlazar lista
      </Button>
    </div>
    </Grid.Column>
    </Grid.Row>

  </Grid>
  )
  
  return (

    <Container>
          <Card.Group itemsPerRow={3}>
          {
                          task.tasks.map(tasks =>(
                          <Card key={tasks._id} className="ui link cards" >
                            <Image  alt="logo" src="https://www.toogit.com/uploads/ServicesAttachments/2020/04071116289599.png" 
                            onClick={()=> push(`/task-form/${tasks._id}`)}/>
                            <Card.Content>  
                            
                              <Card.Header>
                              {tasks.titleLink}
                              </Card.Header>
                              <i>Enlace de Google Drive</i>
                            </Card.Content>
                            <Card.Header extra style={{padding: '10px'}}> 
                              <span className="right floated"> 
                              <Icon className="edit outline" onClick={()=> push(`/task-form/delete/${tasks._id}`)} size='large'/>
                              </span>
                            </Card.Header>
                          </Card>
  
                        ))

          }
          
          </Card.Group>
        </Container>
  )
}


export const getServerSideProps = async (ctx) =>{

  const res = await fetch("http://localhost:3000/api/task")

  const task = await res.json()


  return {
    props: {task,}
  }
}

