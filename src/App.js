import './App.css';
import { useState } from 'react';

function App() {
  const [leftWidth,setLeftWidth]=useState(100);

  // const left= document.getElementById("left-side");

  const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    setLeftWidth(p);
  };

  return (
    <div onMouseMove={handleOnMove}
    onTouchMove={handleOnMove} className="app">
      <div style={{width: `${leftWidth}%`}} width={leftWidth} id="left-side" className='side'>
      <h2 class="title">Today is going to be <span>awesome</span></h2>
      </div>
      <div id="right-side" className='side'>
      <h2 class="title">Today is going to be <span>wonderful</span></h2>
      </div>
    </div>
  )
}

export default App;