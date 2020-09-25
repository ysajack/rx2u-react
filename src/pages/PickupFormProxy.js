import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './templated-erubescent/default.css';
import './templated-erubescent/fonts.css';
import logo from './templated-erubescent/images/rx2ulogo.png';
import Banner from './components/Banner.js';
import Slogan from './components/Slogan.js';
import Proxy from './components/Proxy.js';


class PickupFormProxy extends Component {

  render() {
    return (
      <div id="header-wrapper">
      <Banner />
      <Slogan />

         <div id="wrapper">

         <br></br>
         <div id="breadscrumbs">
          <Link to="/">Home >> </Link> 
          <Link to="/rxpickup">Rx Pickup >> </Link> 
          <Link to="/proxy">Proxy >> </Link> 
       
        </div>

         <div id="featured-wrapper">
         <div className="extra2 margin-btm container">
         <div className="ebox1">

         <div class="title">
          <h2>Please enter the following information:</h2>
         </div>

         <Proxy />

         </div>
         </div>
        </div >
        </div>
      </div>
    );
  }
}

export default PickupFormProxy;
