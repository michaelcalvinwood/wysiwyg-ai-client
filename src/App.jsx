import './App.css'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement, counterSetValue } from './store/sliceCounter';
import WysiwygAI from './components/WysiwygAI/WysiwygAI';

function App() {
  const [content, setContent] = useState('');

  const setTheContent = theContent => {
    console.log('setTheContent', theContent);
    setContent(theContent)
  }

  return (
    <div className='App'>
      <WysiwygAI content={content} setContent={setTheContent}/>
    </div>
  )
}

export default App
