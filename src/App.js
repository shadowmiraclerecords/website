import React from "react";
// import './App.css';
import Landing from './Landing';
import About from './About';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    console.log('sweet');
  }

  componentWillUnmount() {
    console.log('awesome');
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/ranesartistepk">
            <About />
          </Route>
        </Switch>
    );
  }
}

export default App;
