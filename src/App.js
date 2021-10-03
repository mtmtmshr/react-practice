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
import CompB from './compornents/CompB'
import Memo from './compornents/Memo'
import CountDisplay from './compornents/CountDisplay'
import CountClick from './compornents/CountClick'
import {useReducer, useState, useCallback} from 'react'

const initialState = 0
const reducer = (currentState, action) => {
    switch(action) {
        case 'add_1':
            return currentState + 1
        case 'multiple_3':
            return currentState * 3
        case 'reset':
            return initialState
        default:
            return currentState
    }
} 


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const AddCount1 = useCallback(() => {
      setCount1(prevCount => prevCount + 1)
  }, [])

  const AddCount2 = useCallback(() => {
      setCount2(prevCount => prevCount + 1)
  }, [])

  return (
    <AppContext.Provider value={{countProvided:count,dispatchProvided:dispatch}}>
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
          {/*<BasicUseEffect />
          <TimerContainer />
          <ApiFetch />
          <B />
          */}
          {/* <BasicReducer /> */}
          {/*<CompB />
          Count {count}
          */}
          <CountDisplay name="count1" count={count1} />
          <CountClick handleClick={AddCount1}>AddCount1</CountClick>
          <CountDisplay name="count2" count={count2} />
          <CountClick handleClick={AddCount2}>AddCount2</CountClick>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
