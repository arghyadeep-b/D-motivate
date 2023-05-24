import './App.css';
import Side from './side';

function App() {

  const left= document.getElementById("left-side");

  const handleOnMove= e =>{
    const p= e.clientX / window.innerWidth *100;

    //! left.style.width= `${p}%`;
  }

  return (
    <div className="app">
      <div onMouseMove={handleOnMove} id="left-side" className='side'>
        <Side text="Today is going to be " span="awesome" />
      </div>
      <div id="right-side" className='side'>
        <Side text="Today is going to be " span="wonderful" />
      </div>
    </div>
  );
}

export default App;
