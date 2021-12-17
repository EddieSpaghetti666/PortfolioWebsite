import "./Works.scss";
import { ArrowBackIos, ArrowForwardIos, GitHub } from "@material-ui/icons";
import { useState } from "react";
export default function Works() {
  const [currentSlide, setSlide] = useState(0);
  const data = [
    {
      id: "tetris",
      icon: "./assets/mobile.png",
      title: "Tetris",
      desc: "A Tetris clone written in C++. I learned a lot working on this project. It was one of my first large C/C++ projects. It was my first time working with SDL. It was also my first time working on a project with another person outside of school.",
      img: "./assets/tetrisProject.png",
      link: "https://github.com/EddieSpaghetti666/Tetris",
    },
    {
      id: "2hed",
      icon: "./assets/2hed.png",
      title: "2hed",
      desc: "A simple text editor written in C. This project was a lot of fun and there is a lot I want to add to it in the future. I hope to one day be able to write the text editor from within itself. Its definitely not there yet though",
      img: "./assets/2hed.png",
      link: "https://github.com/EddieSpaghetti666/2hed",
    },
    //{
      //id: "webserver",
      //icon: "./assets/globe.png",
      //title: "C Web Server",
      //desc: "A simple web server in C. Able to parse and handle GET requests and serve html. Picture vaguely related.",
      //img: "./assets/webServerProject.jpg",
      //link: "https://github.com/EddieSpaghetti666/C-Web-Server",
    //},
    {
      id: "chess",
      icon: "./assets/writing.png",
      title: "Chess",
      desc: "Chess written in Java. I learned a lot about Object Oriented Programming from this project. This was one of my first larger projects.",
      img: "./assets/chessProject.png",
      link: "https://github.com/EddieSpaghetti666",
    },
    
  ];

  const handleClick = (direction) => {
    console.log(currentSlide);
    direction === "left"
      ? setSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    console.log(currentSlide);
  };
  return (
    <div className="works" id="works">
      <h1>My Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <a target="_blank" rel="noopener noreferrer" href={item.link}>
                    <GitHub></GitHub>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
