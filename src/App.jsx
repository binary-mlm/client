import Userlayout from './Components/Userlayout';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import About from './Components/Pages/About Page/About'
import Contactus from './Components/Pages/Contactus/Contactus';
import Login from "./Components/Pages/Login page/Login";
import Signup from './Components/Pages/Signup_page/Signup';
import Productview from "./Components/Productview/Productview";
import Product from "./Components/Pages/Productpage/Product";

import Education from './Components/Education/Education';
import Logistic from './Components/Logistic/Logistic';
import Dashboardlayout from './Components/UserDashboard/Dashboardlayout';
import Homepage from './Components/UserDashboard/Homepage';
import Welcomeuser from './Components/UserDashboard/Welcomeuser';
import Genealogy from './Components/UserDashboard/Genealogy/Genealogy';
import Associate from './Components/Associate/Associate';
import Editprofile from './Components/UserDashboard/Editprofile/Editprofile';
import Idcard from "./Components/UserDashboard/Idcard";

import News from './Components/News/News';
import Kycverification from './Components/UserDashboard/Editprofile/Kycverification';
import Usersignup from "./Components/Pages/Signup_page/Usersignup";
import Ordernow from "./Components/Ordernow/Ordernow";
import Productlist from "./Components/Productlist/Productlist";
import Signupleft from "./Components/signupfromleader/Signupleft";
import Signupright from "./Components/signupfromleader/Signupright";
import Vision from "./Components/Pages/About Page/Visionmission/Vision";
import Management from "./Components/Pages/About Page/Management/Management";
import Legaldocument from "./Components/Pages/About Page/Legaldocu/Legaldocument";
import Award from "./Components/Pages/About Page/Award&reward/Award";
import Franchiselogin from "./Franchisedashboard/Login/Login";
import Homefranchise from "./Franchisedashboard/Homefanchise";
import Invoice from "./Franchisedashboard/Inventory/Invoice";
import DirectTeam from './Components/UserDashboard/Genealogy/DirectTeam';
import Myorders from "./Components/UserDashboard/Reports/Myorders"
import Poppartners from "./Components/UserDashboard/POP partners/Poppartners"

// products
import Tulsiview from "./Components/Productview/Tulsiview";
import Booster from "./Components/Productview/Booster";
import Shampooview from "./Components/Productview/Shampooview";
import Herbaltea from "./Components/Productview/Herbaltea";
import Facewash from "./Components/Productview/Facewash";
import Soapprenium from './Components/Productview/Soapprenium';
import Applesoap from './Components/Productview/Applesoap';
import Invoice_user from './Components/UserDashboard/Reports/Invoice_user';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/franchise/login" element={<Franchiselogin/>} />
      <Route path="/franchise/dashboard" element={<Homefranchise/>} />
      <Route path="/franchise/invoice" element={<Invoice/>} />
      <Route path="/franchise/inventory" element={<Homefranchise/>} />
      <Route path="/franchise/invoicelist" element={<Homefranchise/>} />
      <Route path="/" element={<Userlayout><Home/></Userlayout>} />
      <Route path="/about" element={<Userlayout><About/></Userlayout>} />
      <Route path="/contactus" element={<Userlayout><Contactus/></Userlayout>} />
      <Route path="/login" element={<Userlayout><Login/></Userlayout>} />
      <Route path="/signup" element={<Userlayout><Signup/></Userlayout>} />
      <Route path="/ordernow" element={<Userlayout><Ordernow/></Userlayout>} />
      <Route path="/usersignup" element={<Userlayout><Usersignup/></Userlayout>} />
      <Route path="/productview/:id" element={<Userlayout><Productview/></Userlayout>} />
      <Route path="/productview" element={<Userlayout><Productview/></Userlayout>} />
      <Route path="/success_story" element={<Userlayout><Associate/></Userlayout>} />
      {/* <Route path="/manufacturing" element={<Userlayout><Manufacturing/></Userlayout>} /> */}
      <Route path="/News" element={<Userlayout><News/></Userlayout>} />
      <Route path="/product" element={<Userlayout><Product/></Userlayout>} />
      <Route path="/productlist" element={<Userlayout><Productlist/></Userlayout>} />
      <Route path="/managment" element={<Userlayout><Management/></Userlayout>} />
      <Route path="/legaldocument" element={<Userlayout><Legaldocument/></Userlayout>} />
      <Route path="/award" element={<Userlayout><Award/></Userlayout>} />

      <Route path="/education" element={<Userlayout><Education/></Userlayout>} />
      <Route path="/vision" element={<Userlayout><Vision/></Userlayout>} />
      <Route path="/logistic" element={<Userlayout><Logistic/></Userlayout>} />
      {/* user dashboard */}
      <Route path="/userdashboard" element={<Dashboardlayout><Homepage/></Dashboardlayout>} />
      <Route path="/userdasboard/welcomeuser" element={<Dashboardlayout><Welcomeuser/></Dashboardlayout>} />
      <Route path="/userdasboard/idcard" element={<Dashboardlayout><Idcard/></Dashboardlayout>} />
      <Route path="/userdasboard/genealogy" element={<Dashboardlayout><Genealogy/></Dashboardlayout>} />
      <Route path="/userdasboard/direct_team" element={<Dashboardlayout><DirectTeam/></Dashboardlayout>} />
      <Route path="/userdasboard/myoders" element={<Dashboardlayout><Myorders/></Dashboardlayout>} />
      <Route path="/userdasboard/invoice" element={<Dashboardlayout><Invoice_user/></Dashboardlayout>} />
      <Route path="/userdasboard/poppartners" element={<Dashboardlayout><Poppartners/></Dashboardlayout>} />
      <Route path="/userdasboard/editprofile" element={<Dashboardlayout><Editprofile/></Dashboardlayout>} />
      <Route path="/userdasboard/kycverification" element={<Dashboardlayout><Kycverification/></Dashboardlayout>}/>
      <Route path="/signupleft/:parentSponsorId" element={<Userlayout><Signupleft/></Userlayout>}/>
      <Route path="/signupright/:parentSponsorId" element={<Userlayout><Signupright/></Userlayout>}/>
      {/* for productview */}
      <Route path="/tulsiview" element={<Userlayout><Tulsiview/></Userlayout>} />
      <Route path="/booster" element={<Userlayout><Booster/></Userlayout>} />
      <Route path="/shampooview" element={<Userlayout><Shampooview/></Userlayout>} />
      <Route path="/herbaltea" element={<Userlayout><Herbaltea/></Userlayout>} />
      <Route path="/Facewash" element={<Userlayout><Facewash/></Userlayout>} />
      <Route path="/soapprenium" element={<Userlayout><Soapprenium/></Userlayout>} />
      <Route path="/applesoap" element={<Userlayout><Applesoap/></Userlayout>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
