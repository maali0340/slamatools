import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col,Container,Form,Button,Row,ButtonGroup,} from 'react-bootstrap';


class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: props.month,
      day: props.day,
      conflict: false,
      color: "secondary",
      monthType: props.monthType,
      name:props.monthType + props.month + props.day.toString()
    };
  }
  swapState(e)
  {
    let cColor="";
    if(this.state.color==="secondary")
    {
      cColor="danger";
    }
    else{cColor="secondary"}
    this.setState(state => ({
      color : cColor,
      conflict: !this.state.conflict
    }));
  }

  renderDay()
  {
    
    if(this.state.day > -1)
    {

        return (
         <Col id="dayLabel">
           <Button
           variant={this.state.color}
           className="day"
           onClick={this.swapState.bind(this)}
           name={this.state.name}
          >
          {this.state.day}
        </Button>
        </Col>
        );
    }
    else{
            return (     
        <Col id="dayLabel"> 
        <Button
          variant="light"
          className="day" id="blank"
          disabled>         
        </Button>
        </Col>
        );    
    }
  }  

  //CHANGE COLOR OR SOMETHING OF THE LIKE
  render() {
    return (

        this.renderDay()
      
    );
  }
}

class Week extends React.Component {    
  constructor(props) {
    super(props);
    this.state = {
      beginDay: props.begin,
      currDay: props.curr,
      endDay: props.end,
      month: props.month,
      monthType: props.monthType
    };
  }

  renderWeek() {

    let days = [];
    let currPlus = 0;
    for (let x = 0; x < 7; x++)
        {
        if(this.state.beginDay>0|| this.state.currDay+x > this.state.endDay)
        {
          while(x<this.state.beginDay || (this.state.currDay+x > this.state.endDay && x < 7))
            {

              days.push("-1");
              x++
            }
        }
        //Second line defaults to push the next day
        if(this.state.currDay + currPlus <= this.state.endDay){days.push(this.state.currDay+currPlus++);}
        }
        const weekMade = days.map((day) =>
        <Day key = {day.toString()}
             day= {day} 
             month = {this.state.month}
             monthType= {this.state.monthType}/>

        );
        return weekMade;
      
  }

  render() {

    return (    
          <Row className="week-row">
              {this.renderWeek()}
          </Row>
    );
  }
}

class DayLabel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        day: props.day, 
    };
  }

  render()
  {
    return (    
      <Col id="dayLabel">  
      <Button
        variant="light"
        className="day" id="lbl"
        disabled
      >
        {this.state.day}
      </Button>
      </Col>
    );
  }
}

class Month extends React.Component {  

  //Instantiates the month object  
  constructor(props) {
    super(props);
    this.state = {
        name: props.name,
        year: props.year,
        beginDay: new Date(props.year,this.getMonth(props.name)-1).getDay(),
        numDays: new Date(props.year,this.getMonth(props.name),0).getDate(),
        monthType: props.monthType
    };
  }

    getMonth(month)
    {
        var months = {
            'January' : '1',
            'February' : '2',
            'March' : '3',
            'April' : '4',
            'May' : '5',
            'June' : '6',
            'July' : '7',
            'August' : '8',
            'September' : '9',
            'October' : '10',
            'November' : '11',
            'December' : '12'
        }
        return months[month];
    }

    onChange(e) {
      let obj = {};
      obj[e.target.id] = e.target.value;
      this.setState(obj);
  }

  renderMonth() {

    var currDay = 1; 
    let weeks = [];

    while(currDay<= this.state.numDays)
    {
      if(currDay === 1)
      {
        var data = 
        {
          begin:this.state.beginDay,
          curr:currDay,
        }
        weeks.push(data);
        currDay+=7-this.state.beginDay;

      } 
      else
      {
        var data2 = 
        {
          begin:0,
          curr:currDay,         
        }
        weeks.push(data2);
        currDay+=7;
      }
    }
    const weekMade = weeks.map((week) =>
    <Week key = {week["curr"].toString()}
          begin = {week["begin"]}
          curr = {week["curr"]}
          end =  {this.state.numDays}
          month = {this.state.name}
          monthType = {this.state.monthType}
           /> 
    );
    return weekMade;
  }

  labelDays(){
    let days = ["Su","M","Tu","W","Th","F","Sa"];
    const dayLabels = days.map((day) =>
    <DayLabel key = {day}
              day = {day}/> );
    return dayLabels;
  }

  render() {
        
    return (
        <Form.Row className="month-form">
          <Container className="MonthBlock">
            <Row className="month-title">
              <Form.Label id="monthLabel" column="lg">
                {this.props.name}
              </Form.Label>
            </Row>
            <Row className="labels">
              <ButtonGroup>
                  {this.labelDays()}
              </ButtonGroup>
            </Row>
            <Row className="weeks">
              {this.renderMonth()}
            </Row>
            </Container>
        </Form.Row>
    );
  }
}


export default Month;