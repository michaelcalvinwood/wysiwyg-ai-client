import './App.css'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement, counterSetValue } from './store/sliceCounter';
import WysiwygAI from './components/WysiwygAI/WysiwygAI';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter)
  return (
    <div className='App'>
      <WysiwygAI />
    </div>
  )
}

export default App
