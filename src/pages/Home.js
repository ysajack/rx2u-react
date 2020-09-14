import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './templated-erubescent/default.css';
import './templated-erubescent/fonts.css';
import logo from './templated-erubescent/images/rx2ulogo.png';
import Banner from './components/Banner.js';
import SloganHome from './components/SloganHome.js';

class Home extends Component {
  componentDidMount(){
  document.title = "Home"
}
  render(){
    return (

      <div id="header-wrapper">
      <Banner />
        <div id="header-featured" > </div>
      <SloganHome />

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
