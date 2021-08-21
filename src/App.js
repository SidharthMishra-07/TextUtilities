import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>   {/*AboutText was set in default props */}
    <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
    </div>
    <hr />
    <About/>


    </>
  );
}

export default App;
