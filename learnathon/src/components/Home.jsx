import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const Home = () => {
return (
  <div> 
<html>

   <body>
         <div class="banner">
            <div class="overlay">
               <div class="navbar">
                  <img src={lg}/>
                  <div class="menu" align="center">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <a href="/login">Login</a>
                  </div>
               </div>
            </div>
         </div>
         <div class="main-card">
            <div class="mcard">
               <h1>Welcome to CradlesHome</h1>
               <button type="submit" onclick="location.href='/login'" align="center" class="home-btn">Get Started</button>
            </div>
         </div>
   </body>
</html>
  </div>
);
};

export default Home;