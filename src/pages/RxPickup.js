import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './templated-erubescent/default.css';
import './templated-erubescent/fonts.css';
import logo from './templated-erubescent/images/rx2ulogo.png';
import Banner from './components/Banner.js';
import Slogan from './components/Slogan.js';
import PickupForm from './components/PickupForm.js';

class RxPickup extends Component {

  render() {
    return (
      <div id="header-wrapper">
      <Banner />
      <Slogan />

         <div id="wrapper">

         <br></br>
         <div id="breadscrumbs">
          <a >Home </a> >>
          <a > Request Rx Pickup</a> >>
        </div>

         <div id="featured-wrapper">
         <div className="extra2 margin-btm container">
         <div className="ebox1">

         <div class="title">
          <h2>Please enter the following information:</h2>
         </div>

         <PickupForm />

         </div>
         </div>
        </div >
        </div>
      </div>
    );
  }
}

export default RxPickup;
