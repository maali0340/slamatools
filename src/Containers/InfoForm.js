import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import {Col,Container,Alert,Form,FormControl,Button,Row,Popover,OverlayTrigger} from 'react-bootstrap';
import Calender from './Calender.js'


class Header extends React.Component {

    render()
    {
        let date = new Date().getFullYear();

        return(
        <Alert variant="info" id="infoFormAlert">
            <Alert.Heading>Field Hockey Information Form {date}</Alert.Heading>
            <hr />
            <p>Please provide the requested information below.
            The SlamaTools team has been working diligently since last fall to create a much fast system to develop the Field Hockey schedule.
            The Field Hockey schedule for Fall 2020 is expected to be in your inbox by end of day April 1st.
            Please do not schedule any events from March 27th to April 1st which may conflict with Field Hockey. </p>
            <hr />
            <p className="mb-0" id="deadline">
            <strong>Deadline for submission is Friday March 27th, 2020.</strong>
            </p>
            <hr/>

        </Alert>
                    );
    }

}
class InfoForm extends React.Component {  



  //Instantiates the month object  
  constructor(props) {
    super(props);
    this.state = {
        name: props.name,
        contents: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const schoolSelect = data.get('schoolSelect');
    const nameInput = data.get('nameInput');
    const emailInput = data.get("emailInput");
    const vCheck = data.get('vCheck')=='on'?1:0;
    const jvCheck = data.get('jvCheck')=='on'?1:0;
    const cCheck = data.get('cCheck')=='on'?1:0;
    const vTimeClock = data.get('vTime');
    const jvTimeClock = data.get('jvTime');
    const leagueStartSelect = data.get('lStart');
    const gwCheck = data.get('gwCheck')=='on'?1:0;
    const otherCheck = data.get('otherCheck')=='on'?1:0;
    const otherNotes = data.get('otherNotes');

    const selectedDates = document.getElementsByClassName("day btn-danger");
    var tmDates = [];
    var fdDates = [];
    for( var i = 0; i < selectedDates.length; i++){
        if(selectedDates[i].name.startsWith("tm")){
            const regex = /tm([A-Za-z]+)(\d+)/gm;
            var matches = [...selectedDates[i].name.matchAll(regex)];
            var month = this.getMonth(matches[0][1]);
            var day = matches[0][2];
            tmDates.push("2020-"+month+"-"+day);
        }
        else{
            const regex = /fd([A-Za-z]+)(\d+)/gm;
            var matches = [...selectedDates[i].name.matchAll(regex)];
            var month = this.getMonth(matches[0][1]);
            var day = matches[0][2];
            fdDates.push("2020-"+month+"-"+day);
        }
    }
    

    const formData = {
        schoolSelect: this.SchoolList()[schoolSelect - 1].name,
        nameInput: nameInput,
        emailInput: emailInput,
        vCheck: vCheck,
        jvCheck: jvCheck,
        cCheck: cCheck,
        vTimeClock: vTimeClock,
        jvTimeClock: jvTimeClock,
        leagueStartSelect: leagueStartSelect,
        gwCheck: gwCheck,
        otherCheck: otherCheck,
        otherNotes: otherNotes,
        tmDates: tmDates.join(),
        fdDates: fdDates.join()
    }
    console.log(formData);
    //data.set('username', data.get('username').toUpperCase());
      console.log(data);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Access-Control-Allow-Origin", "*");
      
      var raw = JSON.stringify(formData);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        dataType:'jsonp'
      };
      
      fetch("http://localhost/Slama/index.php", requestOptions)
        .then(response => response.text())
        .then(result => {console.log(result); alert(result)})
        .catch(error => console.log('error', error));

  }
  getMatches(regex, str){
    let m;

    while ((m = regex.exec(str) !== null)) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }        
    }
    return m;
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
  SchoolList()
  {
    let scheds = [
        {name:'Belleville West Lacross Club',value:'1'},
        {name:'Clayton High School',value:'2'},
        {name:'Cor Jesu Academy',value:'3'},
        {name:'Eureka High School',value:'4'},
        {name:'Francis Howell Central High School',value:'5'},
        {name:'Francis Howell High School',value:'6'},
        {name:'Francis Howell North High School',value:'7'},
        {name:'Hazelwood Central',value:'8'},
        {name:'Hazelwood East',value:'9'},
        {name:'Hazelwood West',value:'10'},
        {name:'Incarnate Word Academy',value:'11'},
        {name:'John Burroughs School',value:'12'},
        {name:'Kirkwood High School',value:'13'},
        {name:'Lafayette High School',value:'14'},
        {name:'Lindbergh High School',value:'15'},
        {name:'Ladue Horton Watkins High School',value:'16'},
        {name:'Marquette High School',value:'17'},
        {name:'Mary Institute Country Day School',value:'18'},
        {name:'Notre Dame High School',value:'19'},
        {name:'Nerinx Hall High School',value:'20'},
        {name:'Northwest R-1 High School',value:'21'},
        {name:'Oakville Senior High School',value:'22'},
        {name:'O\'Fallon Township High School',value:'23'},
        {name:'Parkway Central High School',value:'24'},
        {name:'Pattonville High School',value:'25'},
        {name:'Parkway North High School',value:'26'},
        {name:'Parkway South High School',value:'27'},
        {name:'Parkway West High School',value:'28'},
        {name:'Rosati-Kain High School',value:'29'},
        {name:'Rockwood Summit High School',value:'30'},
        {name:'St. Dominic High School',value:'31'},
        {name:'St. Joseph\'s Academy',value:'32'},
        {name:'St. Pius High School',value:'33'},
        {name:'Ursuline Academy',value:'34'},
        {name:'Visitation Academy',value:'35'},
        {name:'Villa Duchesne and Oak Hill School',value:'36'},
        {name:'Westminster Christian Academy',value:'37'},
        {name:'Webster Groves High School',value:'38'},
        {name:'Wentzville Lacrosse Club',value:'39'},
        {name:'Whitfield School',value:'40'}
    ]

    return scheds;
  }

  addContent()
    {
        let addition = document.getElementById("travelDateSelectInput").value;
        this.setState({contents: this.state.contents+addition+","});
    }

  render() {
    let option = <option value ="" selected disabled>Please select a school</option>
    let options = this.SchoolList().map((school) =>
    <option 
        key={school['name']}
        value={school['value']}
        src={school['src']}
    >
        {school.name}
    </option>
);
    options.unshift(option);
    const popover = (
        <Popover id="popover-basic">
        <Popover.Title as="h3">Notable Days</Popover.Title>
        <Popover.Content width="fit-content">
        Labor Day: September 7<br/>
        Rosh Hashanah:  September 20<br/>
        Yom Kippur: September 28<br/>
        Last Game Scheduled Date: October 15<br/>
        </Popover.Content>
        </Popover>
    );
    
    return (        
    <Container className='bg-dark text-white' id="infobox">
        <Header />
        <hr/>

        <Form method="post" onSubmit={this.handleSubmit}>
            <Container id="boxComponent">
                <Form.Row><Form.Label column='lg'>School Information</Form.Label></Form.Row>
                <Form.Row >
                    <Col>
                        <Form.Group>
                            <Form.Label>School select</Form.Label>
                            <FormControl 
                            componentclass="select" 
                            as='select'
                            name="schoolSelect">
                                {options}
                        </FormControl>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Container>

            <Container id="boxComponent">
                <Form.Label column='lg'>Activity Director Information</Form.Label>
                <Form.Row>
                    <Form.Group as={Col} sm="6">
                        <Form.Label>Athletic Director's Name</Form.Label>
                        <FormControl id="nameInputBox" name ="nameInput"placeholder="John Doe...">
                        </FormControl>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                        <Form.Label>Athletic Director's Email</Form.Label>
                        <FormControl id="emailInputBox" name="emailInput" placeholder ="email@school.edu">
                        </FormControl>
                    </Form.Group>
                </Form.Row>
            </Container>

            <Container id="boxComponent">            
                <Form.Label column='lg'>Teams Information</Form.Label>
                <Form.Row>                    
                    <Form.Label column='lg' id="teamLabel">Please select which teams you plan to have:</Form.Label>
                    <Form.Group as={Col} sm="6">
                        <Form.Check id="vCheckBox" name="vCheck" type="checkbox" label="Varsity" />
                        <Form.Check id="jvCheckBox" name="jvCheck" type="checkbox" label="Junior Varsity" />
                        <Form.Check id="cCheckBox" name="cCheck" type="checkbox" label="C-Level" />
                    </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>                    
                    <Col>
                        <Form.Label id="timeLabel" column="lg">
                            Please select the starting times:
                        </Form.Label>
                    </Col>
                    <Col>
                    <Form.Group sm="6">
                            <Form.Label column='md' id="teamLabel">Varsity</Form.Label>            
                            <input type='time' id="vTimeClock" name="vTime" required/>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group sm="6">
                        <Form.Label column='md' id="teamLabel">Junior Varsity</Form.Label>
                        <input type='time' id="jvTimeClock" name="jvTime" required/>
                    </Form.Group>
                    </Col>
                </Form.Row>
                <hr />
                <Form.Row>                    
                    <Col>
                        <Form.Label id="dateLabel" column="lg">
                            Please select the starting date for your program:
                            MSHSAA: First game day is August 28th
                        </Form.Label>
                    </Col>
                    <Col>
                    <Form.Group sm="6">
                            <input type='date' id="leagueStartSelect" name="lStart" required/>
                    </Form.Group>
                    </Col>         
                </Form.Row>
                <hr />
                <Form.Row> 
                    <Col md = "12">
                        <Form.Label id="dateLabel" column="lg">
                        Please select any days your <strong>TEAMS</strong> will <strong>not</strong> be able to play on by clicking on the buttons below.
                        </Form.Label>
                    </Col>
                    <Col md="12">                       
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <Button variant="warning">Click for notable dates</Button>
                        </OverlayTrigger>
                    </Col>
                    <Col md="12" lg="6">
                    <Calender name="August" year="2020" monthType="tm"/>
                    </Col>
                    <Col md="12" lg="6">
                    <Calender name="September" year="2020" monthType="tm"/>
                    </Col>
                    <Col md="12" lg="6">
                    <Calender name="October" year="2020" monthType="tm"/>
                    </Col>
                                   </Form.Row>
                <hr />
                <Form.Row> 
                    <Col lg="12">
                        <Form.Label id="dateLabel" column="lg">
                        Please select any days your <strong>FIELD</strong> will <strong>not</strong> be able to play on by clicking on the buttons below.
                        </Form.Label>
                    </Col>
                    <Col md="12">                       
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <Button variant="warning">Click for notable dates</Button>
                        </OverlayTrigger>
                    </Col>
                    <Col md="12" lg="6">
                    <Calender name="August" year="2020" monthType="fd"/>
                    </Col>
                    <Col md="12" lg="6">
                    <Calender name="September" year="2020" monthType="fd"/>
                    </Col>
                    <Col md="12" lg="6">
                    <Calender name="October" year="2020" monthType="fd"/>
                    </Col>
                </Form.Row>
            </Container>

            <Container id="boxComponent">
                <Form.Label column='lg'>Other Information</Form.Label>
                <hr />
                <Form.Row>                    
                    <Col>
                        <Form.Label id="dateLabel" column="lg">
                            Are you playing in any tournaments?
                        </Form.Label>
                    </Col>
                    <Col>
                    <Form.Group sm="6"controlId="ADName">
                        <Col className="schoolChecks">
                        <Form.Check inline id="gwCheck" name='gwCheck' type="checkbox" label="Gateway" />
                        <Form.Check inline id="otherCheck" name='otherCheck' type="checkbox" label="Other" />
                        </Col>
                    </Form.Group>
                    </Col>             
                </Form.Row>
                <hr />
                <Form.Row>                    
                    <Col>
                        <Form.Label id="dateLabel" column="lg">
                            Are you planning on traveling? If so an <strong>attempt</strong> will be made not to schedule day before
                            travel date and the Monday following the weekend. If possible, please provide the dates of travel.
                        </Form.Label>
                    </Col>
                    <Col>
                        <Row>
                            <Form.Group sm="6">
                                    <input type='date' id="travelDateSelectInput" defaultValue="2020-03-01" required/>
                                    <Button variant="outline-info" onClick={this.addContent.bind(this)}>Add Date </Button>
                            </Form.Group>
                        </Row>
                    <Row>
                        <p className="travelDateConflicts">{this.state.contents}</p>
                    </Row>
                    </Col>         
                </Form.Row>
                <hr />
                <Form.Row>                    
                    <Col>
                        <Form.Label id="dateLabel" column="lg">
                            Is there any other information we should be made aware of? (homecoming, school event, etc.)
                        </Form.Label>
                    </Col>
                    <Col>
                    <Row>
                        <Form.Group sm="6">
                                <input type='text' id="otherNotes" name="otherNotes" required/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <p className="travelDateConflicts">{this.state.contents}</p>
                    </Row>
                    </Col>         
                </Form.Row>
            </Container>

            <Container id="boxComponent">
                <Form.Row>
                    <Col>
                        <Button variant="success" type="submit" value ="Submit" size="lg" >Submit</Button>
                    </Col>
                </Form.Row>
            </Container>
        </Form>     
    </Container>
    );
  }
}


ReactDOM.render(
    <InfoForm />,
    document.getElementById('root')
    );

export default InfoForm;
