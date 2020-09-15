import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './templated-erubescent/default.css';
import './templated-erubescent/fonts.css';
import logo from './templated-erubescent/images/rx2ulogo.png';
import Banner from './components/Banner.js';
import Slogan from './components/Slogan.js';

class OrderStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      orders: [],
      orderNum: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({orderNum: event.target.value});
  }

  handleSubmit(event) {
    fetch("https://rx2u-rest.appspot.com/rest/orderService/lookupOrder/"+ this.state.orderNum)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              orders: result
            });
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    event.preventDefault();
  }

  componentDidMount(){
  document.title = "Order Status"

  fetch("https://rx2u-rest.appspot.com/rest/orderService/checkOrders")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            orders: result
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, orders } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div id="header-wrapper">
        <Banner />
        <Slogan />

           <div id="wrapper">
           <div id="featured-wrapper">
           <div className="extra2 margin-btm container">
           <div className="ebox2">

           <div>Loading...</div>

           </div>
           </div>
          </div >
          </div>
        </div>
      );
    } else {
      return (

        <div id="header-wrapper">
        <Banner />
        <Slogan />

           <div id="wrapper">
           <div id="featured-wrapper">
          <div className="extra2 margin-btm container">

          <div className="ebox2">
            <div className="title">
              <h2>Order Status:</h2>
            </div>
            <fieldset>
              <div className="stat">
                <table>
                  <tr>
                    <th>
                      Order
                    </th>
                    <th>
                      Status
                    </th>
                    <th>
                      Message
                    </th>
                  </tr>
                {orders.map(order => (
                  <tr>
                    <td>
                      {order.orderNum.toUpperCase()}
                    </td>
                    <td>
                      {order.status}
                    </td>
                    <td>
                      {order.message}
                    </td>
                  </tr>
                ))}
                </table>

              </div>
            <Link className="button" to="/">Close</Link>
            </fieldset>

            <div id="ordStat">
             <form onSubmit={this.handleSubmit}>
              Enter order number: <br></br>
              <input type="text" value={this.state.value} onChange={this.handleChange} /><br></br>
              <button class="button" >Submit</button>
             </form>
           </div>

          </div>
          </div>

          </div >
          </div>
          </div>
      );
    }
  }
}

export default OrderStatus;
