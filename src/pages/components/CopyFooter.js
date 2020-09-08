import React,{Component} from 'react';
import '../templated-erubescent/default.css';
import '../templated-erubescent/fonts.css';
import logo from '../templated-erubescent/images/rx2ulogo.png'

class CopyFooter extends Component {
  render(){
    return (
    <div id="copyright" className="container">
      <p>&copy; Untitled. All rights reserved. | Photos by <a href="https://images.google.com/">GoogleImage</a> | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</p>
    </div>
);
}
}

export default CopyFooter;
