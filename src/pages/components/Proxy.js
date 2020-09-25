import React,{Component} from 'react';
import '../templated-erubescent/default.css';
import '../templated-erubescent/fonts.css';
import {Link} from 'react-router-dom';
import logo from '../templated-erubescent/images/rx2ulogo.png';
import OrderInfo from './OrderInfo.js';

class Proxy extends Component {
  constructor() {
    super();
    this.state = {
      submit: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({submit:event.target.value})
  }

  render(){
    const {first, last, phone, dob, rx, address, pharmacy, click} = this.props.att;
    if(this.state.submit != null){
      return (<OrderInfo info={this.props.att} />);
    }
    else {
    return (
      <fieldset>
      <form onSubmit={e => {e.preventDefault();}}>
        First Name: <br></br>
        <input type="text" name="first" value={first} disabled></input><br></br>
        Last Name: <br></br>
        <input type="text" name="last" value={last} disabled></input> <br></br>
        Phone Number: <br></br>
        <input type="text" name="phone" value={phone} disabled></input>
        <br></br>
        Date of Birth: <br></br>
        <input type="date" name="dob" value={dob} disabled></input>

        <br></br>
        Rx to pick up (optional): <br></br>
        <input type="text" name="rx" id="rx" value={rx} disabled></input> <br></br>
        Full Delivery Address: <br></br>
        <textarea rows="3" cols="30" name="address" value={address} disabled></textarea><br></br>
        Full Pharmacy Address: <br></br>
        <textarea rows="3" cols="30" name="pharmacy" value={pharmacy} disabled></textarea><br></br>

        <fieldset >
      <legend><strong>Please confirm Proxy Agreement:</strong></legend>
    I, <output >{first + " "+ last}</output><br></br><br></br>
      hereby agree to provide proxy to RX2U and its 3rd transportation parties
      to provide pickup and delivery services to me.
      <br></br><br></br>
    </fieldset>
        <Link  type="submit" class="button" to="/orderinfo" >Submit</Link> &nbsp;
        <Link class="button" to="/">Cancel </Link>
      </form>
</fieldset>

    );
    }
 }
}

export default Proxy;
