import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [Mode, setMode] = useState('light') //Whether dark mode is available or not
  const [alert, setAlert] = useState(null)

  const ShowAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode=()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#15181a';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={Mode} toggle={toggleMode}/>   {/*AboutText was set in default props */}
    <Alert alert={alert}/>
    <div className="container my-3">
        <TextForm showAlert={ShowAlert} heading="Enter the text to analyze" mode={Mode}/>
    </div>
    <hr />


    </>
  );
}

export default App;
