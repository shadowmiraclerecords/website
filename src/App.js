import logo from './smr.png';
import React from "react";
import {loadStripe} from '@stripe/stripe-js';
import './App.css';
import axios from 'axios';
import * as EmailValidator from 'email-validator';
var stripePromise = loadStripe('pk_test_51IWVXgLK0vLBTfXTBSMyEiRmQTzC14wWWTaKuJVoSvCeCeQtlHFWFSETdH0lebmaTg5UWAH01GZCqiWIYuWH4dzT00tjajonTm');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: "",
      disable: true,
      email: "",
      total: 0,
      items: {}
    };
    this.updateTheTotal = this.updateTheTotal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.enableBtn = this.enableBtn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.makeApiCall = this.makeApiCall.bind(this);
  }

  async makeApiCall() {
    const email = this.state.email;
    const api = 'http://ec2-54-237-79-92.compute-1.amazonaws.com/write';
    const data = { "email" : email };
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value});
    const valid = EmailValidator.validate(e.target.value);
    // console.log(valid);
    // console.log(e.target.value);
    if (this.state.disable && valid) {
      this.setState({disable: false});
    }
    if (!this.state.disable && !valid) {
      this.setState({disable: true});
    }
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  }

  updateTheTotal() {
    this.setState({total: this.state.total + 50});
  }

  onChange(value) {
    console.log("Captcha value:", value);
  }

  enableBtn(){
    document.getElementById("button1").disabled = false;
  }

  handleClick = async () => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1IWsTeLK0vLBTfXTLTnSRPph", quantity: 1 }],
      // successUrl:
      //   'success.html?session_id={CHECKOUT_SESSION_ID}',
      // cancelUrl:
      //   'canceled.html?session_id={CHECKOUT_SESSION_ID}',
      successUrl:
        'https://shadowmiraclerecords.github.io/website/',
      cancelUrl:
        'https://shadowmiraclerecords.github.io/website/',
      shippingAddressCollection: {
        allowedCountries: ['US'],
      }
    }).then(this.handleStripeResult);
  };

  onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

  render() {
    const { email, disable } = this.state;
    const {
      handleClick,
      makeApiCall
    } = this;
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form name="input">
          <input type="email" placeholder="email" name="email" value={email} onChange={this.changeHandler}></input>
        </form>
        <button id="testing" disabled={disable} onClick={makeApiCall}>Submit</button>
        {/* <button role="link" onClick={handleClick}>
          Store
        </button> */}
        <iframe width="75%" height="127" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
      </header>
    </div>
    );
  }
}

export default App;
