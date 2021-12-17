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
              strings: ['Problem Solver', 'Student', 'Created This Website', 'Real Human Being', 'Ran out of ideas of what to write in here'] })
    }, [])
    return (
        <div className="intro" id="intro">
                <div className="imgContainer">
                <img src="https://www.10wallpaper.com/wallpaper/1366x768/1701/Apple_laptop_notebook_notes-Brand_HD_Wallpaper_1366x768.jpg" alt="" />
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>David Smith</h1>
                    <h3>Programmer <span ref={textRef}></span></h3>
                </div>
                <a href="#works">
                    <KeyboardArrowDown className="icon"/>
                </a>
                </div>
            
        </div>
    )
}
