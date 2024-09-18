import Userlayout from './Components/Userlayout';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import About from './Components/Pages/About Page/About'
import Contactus from './Components/Pages/Contactus/Contactus';
import Login from "./Components/Pages/Login page/Login";
import Signup from './Components/Pages/Signup_page/Signup';
import Productview from "./Components/Productview/Productview";
import Product from "./Components/Pages/Productpage/Product";
import Brand from './Components/Brand_page/Brand';
import Education from './Components/Education/Education';


function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Userlayout><Home/></Userlayout>} />
      <Route path="/about" element={<Userlayout><About/></Userlayout>} />
      <Route path="/contactus" element={<Userlayout><Contactus/></Userlayout>} />
      <Route path="/login" element={<Userlayout><Login/></Userlayout>} />
      <Route path="/signup" element={<Userlayout><Signup/></Userlayout>} />
      <Route path="/productview" element={<Userlayout><Productview/></Userlayout>} />
      <Route path="/product" element={<Userlayout><Product/></Userlayout>} />
      <Route path="/brand" element={<Userlayout><Brand/></Userlayout>} />
      <Route path="/education" element={<Userlayout><Education/></Userlayout>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
