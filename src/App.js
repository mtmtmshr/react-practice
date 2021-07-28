import logo from './logo.svg';
import './App.css';
import Basic1 from './compornents/Basic1'
import Basic2 from './compornents/Basic2'
import BasicUseEffect from './compornents/BasicUseEffect'
import TimerContainer from './compornents/TimerContainer'
import ApiFetch from './compornents/ApiFetch'
import AppContext from './contexts/AppContext';
import B from './compornents/B';
import BasicReducer from './compornents/BasicReducer'

function App() {

  return (
    <AppContext.Provider value={'value from App.js'}>
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
          <B />
          <BasicReducer />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
