import logo from './smr.png';
import React from "react";
// import {loadStripe} from '@stripe/stripe-js';
import './App.css';
import axios from 'axios';
import * as EmailValidator from 'email-validator';
// var stripePromise = loadStripe('pk_test_51IWVXgLK0vLBTfXTBSMyEiRmQTzC14wWWTaKuJVoSvCeCeQtlHFWFSETdH0lebmaTg5UWAH01GZCqiWIYuWH4dzT00tjajonTm');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: "",
      disable: true,
      display: true,
      email: "",
      total: 0,
      items: {},
      isDesktopDisplay: false
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
    this.setState({isDesktopDisplay: window.innerWidth > 340})
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
    const { email, disable, display, isDesktopDisplay } = this.state;
    const {
      // handleClick,
      makeApiCall
    } = this;
    let collection;
    let songs;
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // if (width > 442) {
    //   songs = <div>
    //     <iframe title="There's Another Way To Love" width="75%" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033494595&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
    //     <iframe title="There's Another Way To Love" width="75%" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
    //   </div>
    // }
    // else {
    //   songs = <div>
    //     <iframe title="There's Another Way To Love" width="320" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033494595&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
    //     <iframe title="There's Another Way To Love" width="320" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
    //   </div>
    // }
    if (isDesktopDisplay) {
      songs = <div>
        <iframe title="There's Another Way To Love" width="340" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033494595&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
        <br></br>
        <iframe title="There's Another Way To Love" width="340" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
      </div>
    }
    else {
      songs = <div>
        <iframe title="There's Another Way To Love" width="320" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033494595&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
        <iframe title="There's Another Way To Love" width="320" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
      </div>
    }
    if (display) {
      collection = <div>
        Sign up to hear more:
        <form name="input">
          <input type="email" placeholder="email" name="email" value={email} onChange={this.changeHandler}></input>
        </form>
        <button id="testing" disabled={disable} onClick={makeApiCall}>Submit</button>
      </div>
    } else {
      collection = <div>Thanks for your info</div>
    }
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <form name="input">
          <input type="email" placeholder="email" name="email" value={email} onChange={this.changeHandler}></input>
        </form>
        <button id="testing" disabled={disable} onClick={makeApiCall}>Submit</button> */}
        {/* <button role="link" onClick={handleClick}>
          Store
        </button> */}
        {/* {isDesktopDisplay ? (
          <iframe title="There's Another Way To Love" width="75%" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
        ): (
          <iframe title="There's Another Way To Love" width="320" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
        )} */}
        {/* <iframe title="There's Another Way To Love" width="320" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033494595&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
        <iframe title="There's Another Way To Love" width="320" height="160" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe> */}
        {/* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1033494595&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-739669201" title="The Prince Of Venus" target="_blank" style="color: #cccccc; text-decoration: none;">The Prince Of Venus</a> · <a href="https://soundcloud.com/user-739669201/you-gonna-roll-the-weed-2" title="You Gonna Roll The Weed?" target="_blank" style="color: #cccccc; text-decoration: none;">You Gonna Roll The Weed?</a></div> */}
        {songs}
        {collection}
      </header>
    </div>
    );
  }
}

export default App;
