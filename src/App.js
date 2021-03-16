// import logo from './logo.svg';
import logo from './smr.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form name="input" method="POST" action="https://formspree.io/f/xvovedjb">
          Subscribe(: <input type="email" name="_replyto" placeholder="email">
          </input>
          <input type="submit" value="Send"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
