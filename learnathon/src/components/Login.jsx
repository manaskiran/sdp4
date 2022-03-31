import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const Login = () => {
return (
  <div> 
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
         <div class="log-box">
             <div class="reg">
                 <form name="logform" id="logform" method="POST">
                     <h2>Login</h2>
                     <input type="text" placeholder="Email" name="mail"/>
                     <input type="password" placeholder="Password" name="pass"/>
                     <a href="registration.html">Doesn't have an account !!</a><br/><br/>
                     <button align="center" type="submit">Login</button>
                 </form>
             </div>
         </div>
   </body>
  </div>
);
};

export default Login;