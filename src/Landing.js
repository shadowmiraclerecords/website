import smr from './smr.png';
import React from "react";
import './Landing.css';
import axios from 'axios';
import * as EmailValidator from 'email-validator';
// import {loadStripe} from '@stripe/stripe-js';
// var stripePromise = loadStripe('pk_test_51IWVXgLK0vLBTfXTBSMyEiRmQTzC14wWWTaKuJVoSvCeCeQtlHFWFSETdH0lebmaTg5UWAH01GZCqiWIYuWH4dzT00tjajonTm');


import { Link } from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: "",
      disable: true,
      display: true,
      email: "",
      total: 0,
      items: {},
      isSmallDisplay: false
    };

    this.updateTheTotal = this.updateTheTotal.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.enableBtn = this.enableBtn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.makeApiCall = this.makeApiCall.bind(this);
    this.updateDisplayStyle = this.updateDisplayStyle.bind(this);
  }

  componentDidMount() {
    this.updateDisplayStyle();
    console.log('sweet');
    window.addEventListener("resize", this.updateDisplayStyle)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDisplayStyle)
  }

  updateDisplayStyle() {
    console.log('awesome');
    this.setState({isSmallDisplay: window.innerWidth < 552})
  }

  async makeApiCall() {
    const email = this.state.email;
    const api = 'https://api.shadowmiraclerecords.com/write';
    const data = { "email" : email };
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
        if (response.request.status === 200) {
          this.setState({display: false});
        }
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

  // handleClick = async () => {
  //   // Get Stripe.js instance
  //   const stripe = await stripePromise;

  //   stripe.redirectToCheckout({
  //     mode: "payment",
  //     lineItems: [{ price: "price_1IWsTeLK0vLBTfXTLTnSRPph", quantity: 1 }],
  //     // successUrl:
  //     //   'success.html?session_id={CHECKOUT_SESSION_ID}',
  //     // cancelUrl:
  //     //   'canceled.html?session_id={CHECKOUT_SESSION_ID}',
  //     successUrl:
  //       'https://shadowmiraclerecords.github.io/website/',
  //     cancelUrl:
  //       'https://shadowmiraclerecords.github.io/website/',
  //     shippingAddressCollection: {
  //       allowedCountries: ['US'],
  //     }
  //   }).then(this.handleStripeResult);
  // };

  onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

  render() {
    const { email, disable, display, isSmallDisplay } = this.state;
    const {
      // handleClick,
      makeApiCall
    } = this;
    let collection;
    let songs;
    if (isSmallDisplay) {
      songs =
        <div>
          <iframe className="Landing-smaller" title="Alright" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1068004219&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <br></br>
          <iframe className="Landing-smaller" title="You Gonna Roll The Weed?" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033494595&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <br></br>
          <iframe className="Landing-smaller" title="There&#x27;s Another Way To Love" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
        </div>
    }
    else {
      songs =
        <div>
          <iframe className="Landing-track" title="Alright" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1068004219&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <br></br>
          <iframe className="Landing-track" title="You Gonna Roll The Weed?" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033494595&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
          <br></br>
          <iframe className="Landing-track" title="There&#x27;s Another Way To Love" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
        </div>
    }
    if (display) {
      collection = <div className="Landing-collection">
        Sign Up To Hear More:
        <form name="input">
          <input className="Landing-input" type="email" placeholder="your@email.com" name="email" value={email} onChange={this.changeHandler}></input>
        </form>
        <button className="Landing-confirm" id="testing" disabled={disable} onClick={makeApiCall}>Submit</button>
      </div>
    } else {
      collection = <div className="Landing-gracias">Gracias</div>
    }
    return (
      <div className="Landing-app">
        <Link className="Landing-learn" to="/ranesartistepk">About The Artist</Link>
        <img src={smr} className="Landing-image" alt="smr" />
        {songs}
        {collection}
      </div>
    );
  }
}

export default Landing;
