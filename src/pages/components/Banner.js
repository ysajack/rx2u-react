import React,{Component} from 'react';
import '../templated-erubescent/default.css';
import '../templated-erubescent/fonts.css';
import {Link} from 'react-router-dom';
import logo from '../templated-erubescent/images/rx2ulogo.png'

class Banner extends Component {
  render(){
    return (

        <div id="header" className="container">
          <div className="rxlogo"><img src={logo}/></div>
          <div id="logo">
            <strong id="logoStyle"> Rx2U </strong><br></br>
          </div>
          <div id="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/rxpickup">Request Rx Pickup</Link></li>
              <li><Link to="/orderstatus">Order Status</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>

);
}
}

export default Banner;
