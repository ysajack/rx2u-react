import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home.js';
import CopyFooter from './pages/components/CopyFooter.js';
import About from './pages/About.js';
import OrderStatus from './pages/OrderStatus.js';
import RxPickup from './pages/RxPickup.js';
import PickupFormProxy from './pages/PickupFormProxy.js';
import OrderInfo from './pages/components/OrderInfo.js';


class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
      <Route exact path="/" render={()=>(
        <React.Fragment>
        <Home />
        </React.Fragment>
      )}
      />
      <Route path="/rxpickup" component={RxPickup} />
      <Route path="/proxy" component={PickupFormProxy} />
      <Route path="/about" component={About} />
      <Route path="/orderstatus" component={OrderStatus} />
      <Route path="/orderinfo" component={OrderInfo} />
      <CopyFooter />

      </div>
    </Router>

  );
}
}

export default App;
