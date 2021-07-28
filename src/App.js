import logo from './logo.svg';
import './App.css';
import Basic1 from './compornents/Basic1'
import Basic2 from './compornents/Basic2'
import BasicUseEffect from './compornents/BasicUseEffect'
import TimerContainer from './compornents/TimerContainer'
import ApiFetch from './compornents/ApiFetch'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*
        <Basic1 />
        <Basic2 />
        */}
        {/*<BasicUseEffect />*/}
        <TimerContainer />
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;
