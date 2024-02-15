// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Adminspages from "./pages/Admin";  

// function App() {
//   return ( 
//     <Router>
//       <Adminspages/>
//     </Router>
//   );
// }


// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import CustomNavbar from './components/Navbar';
import Sign from './pages/signin_sub';
import Category from "./pages/Category";
import User_Nav from './components/User_navbar';
import User_Home from './pages/User_Home';
import GiftShopGallery from './pages/Gift_Gallery';
import AnniversaryComponent from './components/Anniversary';
import BirthdayComponent from './components/Birthday';
import WeddingComponent from './components/Wedding';
import ValentineComponent from './components/Valentaice';
import Ring from './components/Ring';
import Cake from './components/Cakes';
import OrderForm from './components/Order_Form';
import OrderConfirmation from './components/Payment';
import Admin_Home from './pages/Admin_home';
import Image from './components/Image';
import UserOrderTable from './components/UserOrder';
import Giftpage from './components/AddGift';
import MyOrders from './components/Myorders';
import GiftDetailsPage from './components/Gifts';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {/* {isAuthenticated ? <User_Nav /> : <CustomNavbar />} */}
      {/* <CustomNavbar/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userhome' element={<User_Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/signuporIn'
          element={<Sign setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path='/category' element={<GiftShopGallery />} />
        <Route path='/anniversary' element={<AnniversaryComponent />} />
        <Route path='/birthday' element={<BirthdayComponent />} />
        <Route path='wedding' element={<WeddingComponent />} />
        <Route path='/valentine' element={<ValentineComponent />} />
        <Route path='/ring' element={<Ring />} />
        <Route path='/cakes' element={<Cake />} />
        <Route path='/order' element={<OrderForm />} />
        <Route path='/confirmation' element={<OrderConfirmation />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/adminhome' element={<Admin_Home />} />
        <Route path='/image' element={<Image/>}/>
        <Route path='/userorder' element={<UserOrderTable/>}/>
        <Route path='/addgift' element={<Giftpage/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/gifts' element={<GiftDetailsPage/>}/>
        {/* <Route path='/adminside' element={<Adminspages />} />  */}

      </Routes>
    </Router>
  );
}

export default App;
