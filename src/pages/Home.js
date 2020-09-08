import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './templated-erubescent/default.css';
import './templated-erubescent/fonts.css';
import logo from './templated-erubescent/images/rx2ulogo.png'

class Home extends Component {
  componentDidMount(){
  document.title = "Home"
}
  render(){
    return (

      <div id="header-wrapper">
        <div id="header" className="container">
          <div className="rxlogo"><img src={logo}/></div>
          <div id="logo">
            <strong id="logoStyle"> Rx2U </strong><br></br>
          </div>
          <div id="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a >Request Rx Pickup</a></li>
              <li><Link to="/orderstatus">Order Status</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
        <div id="header-featured" > </div>
          <div id="banner-wrapper">
            <div id="banner" className="container">
            <i id="motto">Prescriptions on wheels conveniently to you</i>
            </div>
         </div>

         <div id="wrapper">
         <div id="featured-wrapper">
        <div className="extra2 margin-btm container">
        </div >
        </div>
        </div>
  </div>

    );
  }
}

export default Home;
