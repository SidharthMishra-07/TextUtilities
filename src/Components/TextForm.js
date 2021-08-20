import React, {useState} from 'react'       //Here useState is a react hook
import PropTypes from 'prop-types'

export default function TextForm(props) {

    //Here text is a variable having deafult text as 'Enter text here'
    //setText is an updation variable ie; if i want update text....I'll type setText = "Text changed to this"
    const [text, setText] = useState('Enter text here');
    return ( 
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Capitalize Text</button>
        </div>  
    )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}