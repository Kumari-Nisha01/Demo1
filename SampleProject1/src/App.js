import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);     //to get data
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/Decrement counter</h1>
      <h3>Using react and redux</h3>

      <div className='container'>
      <a className='minus' title='Decrement' onClick={ () => dispatch(decNumber())}><span>-</span></a>
      <input name='quantity' type='text' className='inputval' value={myState} />
      <a className='plus' title='Increment' onClick={ () => dispatch(incNumber())}><span>+</span></a>
      </div>
    </div>
  );
}

export default App;