import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import {Container,Form,Image } from 'react-bootstrap';




class Schedules extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: 'Please select a school',
            src: './images/BWLCsched.png',
            alt: 'image is not displaying',
            schoolOptions:this.loadList()
        };
      }

    handleChange(e)
    {
        this.setState({src: this.state.schoolOptions[e.target.value-1].src});     
    }

    loadList()
    {
        let scheds = [
            {name:'Belleville West Lacross Club',src:'./images/BWLCsched.png',value:'1'},
            {name:'Clayton High School',src:'./images/CHSsched.png',value:'2'},
            {name:'Cor Jesu Academy',src:'./images/CJAsched.png',value:'3'},
            {name:'Eureka High School',src:'./images/EHSsched.png',value:'4'},
            {name:'Francis Howell Central High School',src:'./images/FHCHSsched.png',value:'5'},
            {name:'Francis Howell High School',src:'./images/FHHSsched.png',value:'6'},
            {name:'Francis Howell North High School',src:'images/FHNHSsched.png',value:'7'},
            {name:'Hazelwood Central',src:'./images/HCsched.png',value:'8'},
            {name:'Hazelwood East',src:'./images/HEsched.png',value:'9'},
            {name:'Hazelwood West',src:'./imagse/HWsched.png',value:'10'},
            {name:'Incarnate Word Academy',src:'./images/IWAsched.png',value:'11'},
            {name:'John Burroughs School',src:'./images/JBSsched.png',value:'12'},
            {name:'Kirkwood High School',src:'./images/KHSsched',value:'13'},
            {name:'Lafayette High School',src:'./images/LHSsched.png',value:'14'},
            {name:'Lindbergh High School',src:'./images/LBHSsched.png',value:'15'},
            {name:'Ladue Horton Watkins High School',src:'./images/LHWHSsched.png',value:'16'},
            {name:'Marquette High School',src:'./images/MHSsched.png',value:'17'},
            {name:'Mary Institute Country Day School',src:'./images/MICDSsched.png',value:'18'},
            {name:'Notre Dame High School',src:'./images/NDHSsched.png',value:'19'},
            {name:'Nerinx Hall High School',src:'./images/NHHSsched.png',value:'20'},
            {name:'Northwest R-1 High School',src:'./images/NRHSsched.png',value:'21'},
            {name:'Oakville Senior High School',src:'./images/OSHSsched.png',value:'22'},
            {name:'O\'Fallon Township High School',src:'./images/OTHSsched.png',value:'23'},
            {name:'Parkway Central High School',src:'./images/PCHSsched.png',value:'24'},
            {name:'Pattonville High School',src:'./images/PHSsched.png',value:'25'},
            {name:'Parkway North High School',src:'./images/PNHSsched.png',value:'26'},
            {name:'Parkway South High School',src:'./images/PSHSsched.png',value:'27'},
            {name:'Parkway West High School',src:'./images/PWHSsched.png',value:'28'},
            {name:'Rosati-Kain High School',src:'./images/RKHSsched.png',value:'29'},
            {name:'Rockwood Summit High School',src:'./images/RSHSsched.png',value:'30'},
            {name:'St. Dominic High School',src:'./images/SDHSsched.png',value:'31'},
            {name:'St. Joseph\'s Academy',src:'./images/SJAsched.png',value:'32'},
            {name:'St. Pius High School',src:'./images/SPHsched.png',value:'33'},
            {name:'Ursuline Academy',src:'./images/UAsched.png',value:'34'},
            {name:'Visitation Academy',src:'./images/VAsched.png',value:'35'},
            {name:'Villa Duchesne and Oak Hill School',src:'./images/VDOHSsched.png',value:'36'},
            {name:'Westminster Christian Academy',src:'./images/WCAsched.png',value:'37'},
            {name:'Webster Groves High School',src:'./images/WGHSsched.png',value:'38'},
            {name:'Wentzville Lacrosse Club',src:'./images/WLCsched.png',value:'39'},
            {name:'Whitfield School',src:'./images/WSsched.png',value:'40'}
        ]

        return scheds;
    }

    render(){
        let options = this.state.schoolOptions.map((school) =>
        <option 
            key={school['name']}
            value={school['value']}
            src={school['src']}
        >
            {school.name}
        </option>
    );
        return(
            <Container className="bg-dark" id="scheduleBox">
                <Form>                
                    <Form.Group controlId="schoolSelect">
                        <Form.Control
                        componentclass="select"
                        as="select"
                        onChange={this.handleChange.bind(this)}
                        >
                            {options}
                        </Form.Control>
                    </Form.Group>
                  </Form>
                <Image src={this.state.src} alt={this.state.alt} rounded id='schedimg'/>
            </Container>
        );
    }

}

class Header extends React.Component{

    render()
    {
        return(
        <div>
            <h2>Schedules</h2>
            <h5>Select your team to see schedule.</h5>
        </div>
        );
    }
    
}

class SchedulePage extends React.Component {  

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
            <Header />
            <Schedules/>
        </Container>
    );
  }
}


ReactDOM.render(
    <SchedulePage />,
    document.getElementById('root')
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

export default SchedulePage;

/*
    /*        




                                function switchImage(dropdown) {
                                    
                                    document.getElementById("schedule").src = imageList[dropdown];
                                }*/
