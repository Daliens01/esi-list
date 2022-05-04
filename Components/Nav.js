import Link from "next/link"
import { useRouter } from "next/router"
import { Button, Icon, Menu, Container } from "semantic-ui-react"


const Nav = ()=>{
  
 const rer = useRouter()

    return (
      
      <div > 
       
    <Menu borderless style={{ padding: ".3rem"}} attached>
      <Container>
        <Menu.Item name="home">
          <Link href="/">
            <img src="https://i.ibb.co/hYPBkZb/logo.png" style={{width : '50px'}} />
          </Link>
        </Menu.Item>
        <Menu.Item>
       <Button basic onClick={()=> rer.push('/')} icon color="blue" labelPosition='right'  > inicio
       <Icon className="home" /></Button></Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
           <Button primary icon labelPosition='right' 
           onClick={()=> rer.push("../../task-form/form")}>Agregar <Icon name='right arrow' /></Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
 
    </div>)
}


export default Nav