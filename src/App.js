import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light') //Whether dark mode is available or not
  const [alert, setAlert] = useState(null)

  const ShowAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#15181a';
      // document.title = "TextUtils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title = "TextUtils";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={Mode} toggle={toggleMode}/>   {/*AboutText was set in default props */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={Mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={ShowAlert} heading="Enter the text to analyze" mode={Mode}/>
          </Route>
    </Switch>     
    </div>

    </Router>
    </>
  );
}

export default App;
