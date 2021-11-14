import "./Works.scss"
import { PhoneIphone, ArrowBackIos, ArrowForwardIos} from "@material-ui/icons"
import { useState } from "react"
export default function Works() {
    const [currentSlide, setSlide] = useState(0);
    const data = [
        {
            id: "web",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          },
          {
            id: "mobile",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          },
          {
            id: "branding",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
          },
    ]

    const handleClick = (direction) =>{
        console.log(currentSlide);
        direction === "left" 
        ? setSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
        console.log(currentSlide);
    }
    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
          {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <PhoneIphone className="icon"/>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://images.idgesg.net/images/article/2019/03/c-plus-plus_code-100790020-large.jpg?auto=webp&quality=85,70"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
            </div>
            <ArrowBackIos className="arrow left" onClick={()=>handleClick("left")}/>
            <ArrowForwardIos className="arrow right" onClick={()=>handleClick("right")}/>
        </div>
    )
}
