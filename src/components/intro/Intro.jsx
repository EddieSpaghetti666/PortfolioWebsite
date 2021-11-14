import "./Intro.scss"
import { KeyboardArrowDown } from "@material-ui/icons"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, 
            { showCursor: true, 
              typeSpeed: 50,
              backDelay: 1000,
              backSpeed: 30,
              strings: ['Gorillionaire Grindset', 'Sigma Male', '6\'8"'] })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/jb.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>David Smith</h1>
                    <h3>Programmer <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown className="icon"/>
                </a>
            </div>
        </div>
    )
}
