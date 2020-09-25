import React,{Component} from 'react';
import '../templated-erubescent/default.css';
import '../templated-erubescent/fonts.css';
import {Link, Redirect} from 'react-router-dom';
import logo from '../templated-erubescent/images/rx2ulogo.png';
import Proxy from './Proxy.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class PickupForm extends Component {
  constructor() {
    super();
    this.state = {
      first: null,
      last: null,
      phone: null,
      dob: null,
      rx: null,
      address: null,
      pharmacy: null,
      click: null
    };
    this.form = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValues = this.getValues.bind(this);
  }

  getValues(event) {
   // alert('Functionality in progress!');
  
  // event.preventDefault();
   let nam = event.target.name;
   let val = event.target.value;
   this.setState({[nam]: val});

  }

  handleSubmit(event){
     event.preventDefault();

   //  this.setState({first: event.target.value});

    // let nam = event.target.name;
    // let val = event.target.value;
    // this.setState({[nam]: val});
  }



  render(){
  //  alert("state: "+ this.state.click);
 const {first, last, phone, dob, rx, address, pharmacy, click} = this.state;
 const allReqFieldsMet = (first != null && last != null && phone != null && dob != null && address != null && pharmacy != null && click != null);
      if(allReqFieldsMet){
        return (<Proxy att={this.state} />)
      }
      else {
        return (
      <fieldset>
                <form onSubmit={e => {e.preventDefault();}}>
                  First Name: <br></br>
                  <input type="text" name="first" required onChange={this.getValues}></input><br></br>
                  Last Name: <br></br>
                  <input type="text" name="last" required onChange={this.getValues}></input> <br></br>
                  Phone Number: <br></br>
                  <input type="text" name="phone" required onChange={this.getValues}></input>
                  <br></br>
                  Date of Birth: <br></br>
                  <input type="date" name="dob" required onChange={this.getValues}></input>

                  <br></br>
                  Rx to pick up (optional): <br></br>
                  <input type="text" name="rx" id="rx" onChange={this.getValues}></input> <br></br>
                  Full Delivery Address: <br></br>
                  <textarea rows="3" cols="30" name="address" required onChange={this.getValues}></textarea><br></br>
                  Full Pharmacy Address: <br></br>
                  <textarea rows="3" cols="30" name="pharmacy"  required onChange={this.getValues}></textarea><br></br>

                  <input type="submit" class="button" value="Continue" name="click" onClick={this.getValues}/>
                  {/* <Link  type="submit" class="button" to="/proxy" >Continue</Link> &nbsp; */}
                  <Link class="button" to="/">Cancel </Link>
                </form>
        </fieldset>
    );
  }
 }
}

export default PickupForm;
