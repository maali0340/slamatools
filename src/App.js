import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Row,Col,Nav,Image,Navbar,Container } from 'react-bootstrap';
import {NavLink,Link,Switch} from "react-router-dom";
import Routes from './Routes';


class Branding extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      src : "./images/Branding.png"
    };
  }

  render()
  {
    return(
      <Image src={this.state.src} className="justify-content-center" alt="imgnotfound" rounded/>
    );
  }
}
class FPNav extends React.Component {


  render()
  {
    return(
        <Container className="bg-dark">
            <Navbar  bg="dark" variant="dark" id ="navBarBox" expand="md" >
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ml-auto" variant="pills" justify="true" >
                            <Nav.Item>
                                <NavLink as={Link} to="/home" className="nav-link" activeStyle={{ backgroundColor: '#A4A2A2' }}>Home</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink as={Link} to="/InfoForm"className="nav-link" activeStyle={{ backgroundColor: '#A4A2A2' }}>InfoForm</NavLink>
                            </Nav.Item>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch><Routes /></Switch>
        </Container>
    );
  }
}

class Base extends React.Component{

    render(){
        return(
            <Container id="WholePage">
                <Container className ="bg-dark text-white" id="brandingBox">
                    <Row>
                        <Col><Branding></Branding></Col>
                    </Row>                
                </Container>
                <Row>
                    <Col>
                        <FPNav></FPNav>
                        
                    </Col>
                </Row>
                
                <Row>
                <Container className='bg-dark text-white' id="copyright">
                    <Row><Col> <p>SlamaTools, Copyright &copy; 2020</p></Col></Row>
                </Container>
                </Row>
            </Container>
        );
    }
}

export default Base;