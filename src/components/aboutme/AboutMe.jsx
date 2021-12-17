import React from "react";
import "./aboutme.scss";
export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <img
          src="https://www.shareicon.net/data/512x512/2015/09/18/103157_man_512x512.png"
          alt="avatar"
          style={{ height: "200px" }}
        />
        <h2>About Me</h2>
        <hr />
        <p>
          I'm a programmer from Waterford NY. I have a Associate's Degree in
          Computer Science from Schenectady County Community College, and am
          close to completing my Bachelors Degree at SUNY Albany. I love solving
          problems with code. So far, most of my experience has been with C++,
          Java, and C; but I'm interested in everything.
        </p>
        <p>
          Some of my other interests include: reading, philosophy, history, and
          fitness. Feel free to contact me about anything.
        </p>
        <hr />
        <div className="skillContainer">
          <div className="skill">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png"
              alt=""
            />
          </div>
          <div className="skill">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              alt=""
            />
          </div>
          <div className="skill">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
              alt=""
            />
          </div>
          <div className="skill">
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt=""
            />
          </div>
          <div className="skill">
            <img src="./assets/JSskill.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
