import React from "react";
import Home from "./component/home.js";
import Register from "./component/register.js";
import Login from "./component/login.js";
import Insert from "./component/Insert"
import View from "./component/View";
import Footer from "./component/Footer";
 import Navbar from "./component/Navbar"


import "./App.css";

import { Route, Routes } from "react-router-dom";
// import { Navbar } from "react-bootstrap";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          {/* <Route exact path="/admin" element={<Admin />}></Route> */}
          <Route exact path="/home" element={<Home />}></Route>
        
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/book" element={<Insert />}></Route>
          {/* <Route exact path="/view"><View /></Route> */}


                                                                                                                                                                                                                                                                                                                                                                                                                        
        </Routes>
      </div>
    </>
  );
}


//---------------------------------------

// import { Route,Routes } from "react-router-dom";

// //User Pages
// import Register from "./component/register";

// import Login from "./component/login";
// import Forget from "./component/Forget";
// import Home from "./component/home";

// import Navbar from "./component/Navbar";





// import Footer from "./component/Footer";


// function App() {
//   return (
//     <div>
//       {/* User Routes */}

//       <Routes>
//       <Route exact path="/" component={Login} />
//       <Route exact path="/forget">
//         <Forget />
//       </Route>
//       <Route exact path="/register" component={Register} />
      
//       <Route exact path="/home">
//         <Navbar />
//         <Home />
//         <Footer />
//       </Route>
    
      
//       {/* <Route exact path="/donate">
//         <Navbar />
//         <Insert />
//         <Footer />
//       </Route> */}
     
//       {/* <Route exact path="/view">
//         <Navbar />
//         <View />
//         <Footer />
//       </Route> */}
   
     

//       {/* Admin routes */}
//       </Routes>
    
//     </div>
//   );
// }

// export default App;
