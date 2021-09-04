import React , {useState} from 'react'

export default function About(props) {
    //State Functions
    // const [myStyle, setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor:"white"
    // })
    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const [darkbtn, setdarkbtn] = useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    //Functions
    // const toggleStyle=()=>{
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color: "black",
    //             backgroundColor:"white"
    //         })
    //         setbtnText("Enable Dark Mode");
    //         setdarkbtn({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //     }
    //     else{
    //         setmyStyle({
    //             color: "white",
    //             backgroundColor:"black"
    //         })
    //         setbtnText("Enable Light Mode");
    //         setdarkbtn({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //     }
    // }

    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'#15181a'}}>
            <h1 className="my-4">About Us </h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{backgroundColor: props.mode==='dark'?'#15181a':'white', color: props.mode==='dark'?'white':'#15181a'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#15181a':'white', color: props.mode==='dark'?'white':'#15181a'}}>
                            <strong>This is the First item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'#15181a':'white', color: props.mode==='dark'?'white':'#15181a'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#15181a':'white', color: props.mode==='dark'?'white':'#15181a'}}>
                            <strong>This is the Second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'#15181a':'white', color: props.mode==='dark'?'white':'#15181a'}} type ="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#15181a':'white', color: props.mode==='dark'?'white':'#15181a'}}>
                            <strong>This is the Third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
