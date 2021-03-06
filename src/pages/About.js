import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './templated-erubescent/default.css';
import './templated-erubescent/fonts.css';
import logo from './templated-erubescent/images/rx2ulogo.png';
import Banner from './components/Banner.js';
import Slogan from './components/Slogan.js';

class About extends Component {
  componentDidMount(){
  document.title = "About"
}
  render(){
    return (

      <div id="header-wrapper">
      <Banner />
      <Slogan />

         <div id="wrapper">
         <div id="featured-wrapper">
        <div className="extra2 margin-btm container">

        <div id="aboutStyle">
            <h2>This app is built in:</h2> <br></br>
            <ul className="list">
              <li>
                React/JSX framework, UI app hosted in Netlify
              </li>
              <li>
                Java Rest Services/Jersey hosted in Google App Engine
              </li>
              <li>
                MySQL hosted in Google Cloud SQL
              </li>
            </ul>

            <hr></hr>

            <h2>Other design, techniques, and tools used:</h2><br></br>
            <ul className="list">
              <li>
                Single Page App (SPA)
              </li>
              <li>
                Components: Parent-components, sub-components
              </li>
              <li>
                Data Binding
              </li>
              <li>
                Service: Fetch API, external Rest Services
              </li>
              <li>
                Manipulation: Routing and Controlling for SPA (routing components, controlling views), events, Input Validation
              </li>
            </ul>

            <hr></hr>
            <h2>Application:</h2><br></br>
            <p>
              "Prescriptions on wheels" is where users can create an Rx pickup job, which will have Uber pick up once Pharmacy completes the order,
              and Uber will deliver to the users' doorsteps.
            </p>

          </div>

        </div >
        </div>
        </div>
      </div>

    );
  }
}

export default About;
