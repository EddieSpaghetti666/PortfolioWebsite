import "./Intro.scss"
import { KeyboardArrowDown } from "@material-ui/icons"

export default function Intro() {
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
                    <h3>Programmer</h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown className="icon"/>
                </a>
            </div>
        </div>
    )
}
