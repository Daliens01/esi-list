import { useRouter } from "next/router";
import { Button, Icon, Menu, Container } from "semantic-ui-react";

const Nav = ()=>{
 const ruta = useRouter();
    return(
      <div > 
        <Menu borderless style={{ padding: ".3rem"}} attached>
          <Container>
            <Menu.Item name="home">
                <img src="https://i.ibb.co/hYPBkZb/logo.png" style={{width : '50px'}}  onClick={()=> ruta.push("/")}/>
            </Menu.Item>
            <Menu.Item>
            <Button basic onClick={()=> ruta.push('/')} icon color="blue" labelPosition='right'  > inicio
            <Icon className="home" /></Button></Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
              <Button primary icon labelPosition='right' 
              onClick={()=> ruta.push("../../task-form/form")}>Agregar <Icon name='right arrow' /></Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
     </div>)
}


export default Nav