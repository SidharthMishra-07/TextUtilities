import React, {useState} from 'react'       //Here useState is a react hook
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUppercase =()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowercase =()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase","success");
    }
    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success");
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnchange=(event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    //Here text is a variable having deafult text as 'Enter text here'
    //setText is an updation variable ie; if i want update text....I'll type setText = "Text changed to this"
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#15181a'}}>
            <h2 className="mb-3">{props.heading}</h2>
            <div className="mb-3">
                <textarea value = {text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#15181a':'white', color: props.mode==='dark'?'white':'#15181a'}} className="form-control" id="myText" rows="8" placeholder="Enter your text here"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUppercase}>Capitalize Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowercase}>LowerCase Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'#15181a'}}>
            <h2>Word Count </h2>
            <p>{text.split(/\s+/).filter(function(n){return n!==''}).length} words and {text.length} characters</p>
            
        </div>
        </> 
    )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}