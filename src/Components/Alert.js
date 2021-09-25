import React from 'react'

function Alert(props) {
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert

//NOTE: 'props.type &&' ensures that if props.type is not null then the following code will get executed