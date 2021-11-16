import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/Works/Works";
import Contact from "./components/contact/Contact";
import { useState } from "react"
import "./App.scss"
import Menu from "./components/menu/Menu";
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar open={menuOpen} setOpen={setMenuOpen}/>
      <Menu open={menuOpen} setOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Works/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
