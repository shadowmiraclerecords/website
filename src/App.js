import logo from './smr.png';
import React from "react";
import './App.css';

import ReCAPTCHA from "react-google-recaptcha";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      items: {}
    };
    this.updateTheTotal = this.updateTheTotal.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  updateTheTotal() {
    this.setState({total: this.state.total + 50})
  }

  onChange(value) {
    console.log("Captcha value:", value);
  }

  render() {
    const {
      onChange,
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
          <ReCAPTCHA
            sitekey="6LfOLYUaAAAAAAb9C7HdYcjYSi4csM2IttV8Z4SK"
            onChange={onChange}
          />
        </form>
        <div className="container">
          <img src={logo} alt="CDS" width="100" height="100"></img>
          <br></br>
          <button onClick={updateTheTotal}>
            Add This To The Cart
          </button>
          <br></br>
          <button>
            Go To Checkout ${this.state.total}
          </button>
        </div>
      </header>
    </div>
    );
  }
}

export default App;
