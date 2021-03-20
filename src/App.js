import logo from './smr.png';
import React from "react";
import {loadStripe} from '@stripe/stripe-js';
import './App.css';
// import ReCAPTCHA from "react-google-recaptcha";

var stripePromise = loadStripe('pk_test_51IWVXgLK0vLBTfXTBSMyEiRmQTzC14wWWTaKuJVoSvCeCeQtlHFWFSETdH0lebmaTg5UWAH01GZCqiWIYuWH4dzT00tjajonTm');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: "",
      total: 0,
      items: {}
    };
    this.updateTheTotal = this.updateTheTotal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateTheTotal() {
    this.setState({total: this.state.total + 50});
  }

  onChange(value) {
    console.log("Captcha value:", value);
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
        'https://shadowmiraclerecords.github.io/website/'
    }).then(this.handleStripeResult);
  };

  render() {
    const {
      handleClick,
      updateTheTotal
    } = this;
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form name="input" method="POST" action="https://formspree.io/f/xvovedjb">
          Subscribe(: <input type="email" name="_replyto" placeholder="email">
          </input>
          <input type="submit" value="Send"></input>
          {/* <ReCAPTCHA
            // sitekey="6LfOLYUaAAAAAAb9C7HdYcjYSi4csM2IttV8Z4SK"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            // sitekey="6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
            onChange={onChange}
          /> */}
        </form>
        {/* <div className="container">
          <img src={logo} alt="CDS" width="100" height="100"></img>
          <br></br>
          <button onClick={updateTheTotal}>
            Add This To The Cart
          </button>
          <br></br>
          <button>
            Go To Checkout ${this.state.total}
          </button>
        </div> */}
        <script src="https://js.stripe.com/v3/"></script>
        <button role="link" onClick={handleClick}>
          Store
        </button>
      </header>
    </div>
    );
  }
}

export default App;
