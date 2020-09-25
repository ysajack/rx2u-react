import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../templated-erubescent/default.css';
import '../templated-erubescent/fonts.css';
import Banner from './Banner.js';
import Slogan from './Slogan.js';
import pharmacy from '../templated-erubescent/images/pharmacy1.jpg';

class OrderInfo extends Component {
  componentDidMount(){
  document.title = "Order Info"
}
  render(){

    return (

      <div id="header-wrapper">
      <Banner />
      <Slogan />

         <div id="wrapper">
         <div id="featured-wrapper">
        <div className="extra2 margin-btm container"> 
        
        <div className="ebox1">
      <div className="title">
        <h2>Your order info:</h2>
      <fieldset>
            Order number: <strong>45X5638</strong>
            <br/>
            Name: First Last
            <br/>
            Phone: Phone
            <br/><br/>
            Thanks for placing the service!
            <br/><br/>
            <Link  type="submit" class="button" to="/orderstatus" >Close</Link>
          </fieldset>
          </div>
      </div>

      <div className="ebox2">
        <div className="title">
          <span className="byline" style={{textAlign: 'left', fontWeight: '800'}}>We'll be in contact with your Pharmacy...</span>
          <br/><br/>
          <img src={pharmacy}/>
        </div>
      </div>

        </div >
        </div>
        </div>
      </div>

    );
  }
}

export default OrderInfo;
