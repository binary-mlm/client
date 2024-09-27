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
import Logistic from './Components/Logistic/Logistic';
import Dashboardlayout from './Components/UserDashboard/Dashboardlayout';
import Homepage from './Components/UserDashboard/Homepage';
import Welcomeuser from './Components/UserDashboard/Welcomeuser';
import Genealogy from './Components/UserDashboard/Genealogy/Genealogy';
import Associate from './Components/Associate/Associate';
import Editprofile from './Components/UserDashboard/Editprofile/Editprofile';
import Manufacturing from './Components/Manufacturing/Manufacturing';
import News from './Components/News/News';

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
      <Route path="/productview/:id" element={<Userlayout><Productview/></Userlayout>} />
      <Route path="/associate" element={<Userlayout><Associate/></Userlayout>} />
      <Route path="/manufacturing" element={<Userlayout><Manufacturing/></Userlayout>} />
      <Route path="/News" element={<Userlayout><News/></Userlayout>} />
      <Route path="/product" element={<Userlayout><Product/></Userlayout>} />
      <Route path="/brand" element={<Userlayout><Brand/></Userlayout>} />
      <Route path="/education" element={<Userlayout><Education/></Userlayout>} />
      <Route path="/logistic" element={<Userlayout><Logistic/></Userlayout>} />
      <Route path="/userdashboard" element={<Dashboardlayout><Homepage/></Dashboardlayout>} />
      <Route path="/welcomeuser" element={<Dashboardlayout><Welcomeuser/></Dashboardlayout>} />
      <Route path="/genealogy" element={<Dashboardlayout><Genealogy/></Dashboardlayout>} />
      <Route path="/editprofile" element={<Dashboardlayout><Editprofile/></Dashboardlayout>} />
      <Route path="/editprofile" element={<Dashboardlayout><Editprofile/></Dashboardlayout>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
