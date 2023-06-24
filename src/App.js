import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNavbar from './components/newNavbar/NewNavbar';
import Home from './components/home/Home';
import AboutMe from './components/aboutMe/AboutMe';
import MyPhone from './components/myPhone/MyPhone';
import MyGame from './components/myGame/MyGame';


function App() {
  return (
    <div>
      {/* <NewNavbar/> */}
   <BrowserRouter> 
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/aboutme" element={<AboutMe />} />
   <Route path="/myphone" element={<MyPhone />} />
   <Route path="/mygame" element={<MyGame />} />
   </Routes>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
