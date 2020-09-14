import React,{Component} from 'react';
import '../templated-erubescent/default.css';
import '../templated-erubescent/fonts.css';
import logo from '../templated-erubescent/images/rx2ulogo.png'

class Slogan extends Component {
  render(){
    return (
      <div id="banner-wrapper">
        <div id="banner" className="container">
        <i id="motto">Prescriptions on wheels conveniently to you</i>
        </div>
      </div>

    );
 }
}

export default Slogan;
