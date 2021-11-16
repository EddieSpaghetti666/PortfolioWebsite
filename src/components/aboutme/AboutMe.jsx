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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
            <img
              src="./assets/JSskill.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
