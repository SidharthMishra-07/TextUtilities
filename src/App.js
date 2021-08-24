import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [Mode, setMode] = useState('light') //Whether dark mode is available or not

  const toggleMode=()=>{
    if(Mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={Mode} toggle={toggleMode}/>   {/*AboutText was set in default props */}
    <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
    </div>
    <hr />
    <About/>


    </>
  );
}

export default App;
