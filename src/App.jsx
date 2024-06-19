import React, { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'

function App() {
  const[maskOpen, setMask] = useState(false);
function toggleMask(){
  setMask(!maskOpen);
}
  return (
    <main className='outer-container'>
      <div className='inner-container'>
        <Navbar onClose = {toggleMask}/>
        <Hero/>
        </div>
        <div className={`mask ${maskOpen ? 'show' : ''}`}></div>
    </main>
  )
}

export default App
