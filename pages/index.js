import { Image, Card, Icon, Container, Grid } from "semantic-ui-react"
import {push} from "next/router"
import axios from "axios"
export default function Home({task}) {
  let count = task.length
  console.log(count)
  if (!count) return emptyData()
  return (
    <Container>
          <Card.Group itemsPerRow={3}>
          {
                          task.map(tasks =>(
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

export const emptyData = () =>{
return(
  <Grid centered  verticalAlign="center" columns="1" >
    <Grid.Row>
        <Grid.Column textAlign="center">
          <h1><i>No hay listas elazadas para verse</i></h1>
          <Image style={{'margin': '0 auto'}}  alt="none" src="https://eztoro.com/static/svg/no_data.svg"/>
    </Grid.Column>
    </Grid.Row>
  </Grid>
)
}
 
export const getServerSideProps = async ({req, res}) =>{

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const task = await fetch("https://api-daliens01.vercel.app/api/options").then(task => task.json())
  //https://esi-list.vercel.app/api/task/
  return {
    props: {task,}
  }
}
