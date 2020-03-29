import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import {Container,Row,Col,Jumbotron,Alert } from 'react-bootstrap';



class FPDescrip extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       name: props.name,
       
   };
  }

  render()
  {
    return(
      <div className="DescriptionBox">
        <Jumbotron className="text-dark" id="descrip">
          <h1>Sports Scheduling Made Easy!</h1>
          <p>
            Taking the hassle out of making schedules.<br/>
            Simply fill out some information and we will take it from there.<br/> Go Blues!
          </p>
        </Jumbotron>
        <Alert variant="danger" id="fpADAlert">
        <h3>Athletic Directors!!!</h3>
        <p>Click on the InfoForm link above to fill out and submit the information form</p>
        </Alert>
      </div>

    );
  }
}

class FrontPage extends React.Component {  

  //Instantiates the month object  
  constructor(props) {
    super(props);
    this.state = {
        name: props.name,
        
    };
  }
  render() {
        
    return (
      <Container className='bg-dark text-white' id="Pagebox">
               <Row><Col> <FPDescrip /></Col></Row>
       </Container>
    );
  }
}


ReactDOM.render(
    <FrontPage />,
    document.getElementById('root')
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

export default FrontPage;
