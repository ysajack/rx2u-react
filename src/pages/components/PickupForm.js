import React,{Component} from 'react';
import '../templated-erubescent/default.css';
import '../templated-erubescent/fonts.css';
import logo from '../templated-erubescent/images/rx2ulogo.png'

class PickupForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Functionality in progress!');
    event.preventDefault();
  }

  render(){
    return (

      <fieldset>
                <form onSubmit={this.handleSubmit}>
                  First Name: <br></br>
                  <input type="text" name="first"></input><br></br>
                  Last Name: <br></br>
                  <input type="text" name="last"></input> <br></br>
                  Phone Number: <br></br>
                  <input type="text" name="phone" ></input>
                  <br></br>
                  Date of Birth: <br></br>
                  <input type="date" name="dob" ></input>

                  <br></br>
                  Rx to pick up (optional): <br></br>
                  <input type="text" name="rx" id="rx" ></input> <br></br>
                  Full Delivery Address: <br></br>
                  <textarea rows="3" cols="30" name="address"></textarea><br></br>
                  Full Pharmacy Address: <br></br>
                  <textarea rows="3" cols="30" name="pharmacy" ></textarea><br></br>

                  <input type="submit" class="button" value="Continue" ></input>
                  <button class="button">Cancel</button>
                </form>
        </fieldset>

    );
 }
}

export default PickupForm;
