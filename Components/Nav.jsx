import { useRouter } from "next/router";
import { Radio, Button, Icon, Menu, Container, Dropdown } from "semantic-ui-react";

const Nav = ()=>{
  
 const ruta = useRouter();
    return(
      <div > 
        <Menu borderless style={{ padding: ".3rem"}} attached id="home" >
          <Container>
            <Menu.Item name="home">
                <img alt="inicio" id="logo" src="https://i.ibb.co/hYPBkZb/logo.png"   onClick={()=> ruta.push("/")}/>
            </Menu.Item>
            <Menu.Item>
                <Dropdown id="lista" item text="Ver listas" style={{width:'120px', 'border':'1px solid #444'}}>
            <Dropdown.Menu>
                      <Dropdown id="lic"  item text="LICENCIATURA">
                     <Dropdown.Menu>
                            <Dropdown.Item id="lic2" icon="globe" onClick={()=> ruta.push('../../task-form/627bef7b4a8163d612d3b7a3')} text="SABATINO-MECATRONICA" />
                            <Dropdown.Item icon="globe" onClick={()=> ruta.push('../../task-form/627bec884a8163d612d3b799')} text="SABATINO-QUIMICA" />
                           </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown id="master" item text="MAESTRIAS">
                    <Dropdown.Menu>
                      <Dropdown.Item icon="globe" onClick={()=> ruta.push('../../task-form/627befa54a8163d612d3b7aa')} text="COATZA MIM" />
                      <Dropdown.Item icon="globe" onClick={()=> ruta.push('../../task-form/62851a09a243f30ccaff49e0')} text="MSH-COATZA" />
                      <Dropdown.Item icon="globe" onClick={()=> ruta.push('../../task-form/627befc24a8163d612d3b7b2')} text="MSH-MIMC-PUEBLA" />
                    </Dropdown.Menu>
                  </Dropdown>
            </Dropdown.Menu>
          </Dropdown>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
              <Button id="agregar" primary icon labelPosition='right'
              onClick={()=> ruta.push("../../task-form/form")}>Agregar <Icon name='right arrow' /></Button>&nbsp;&nbsp;&nbsp;
              <Radio  slider="true" primary style={{'display':'none'}}
              onClick={()=>{
                
                 document.body.classList.toggle("dark-mode");
              
              }}></Radio>
              </Menu.Item>
              <Menu.Menu position="right">
              
              </Menu.Menu>
            </Menu.Menu>
          </Container>
        </Menu>
        
     </div>)
}
export default Nav