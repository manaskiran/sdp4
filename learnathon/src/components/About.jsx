import React from "react";
 import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const About = () => {
return (
  <div>  
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
    <div class="abt-card">
  <h1 align="center">About Us</h1>
  <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Students Orbit provides you the web resources, materials based on the needs of the user's choice. 
     The web resources and materials are categorized based on the semesters. 
     Although many blogs are often rarely updated, boring or filled with useless rubbish, we have managed to 
     find some that are generally interesting and should give you a good picture of university life. 
     <br/><br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The user must <a href="registration.html">Register</a> into the website if there is a account already 
     user must <a href="login.html">Login</a> to see the content in the Students Orbit. It will make students life easier. It will save students time.
     <br/><br/>
     Students Orbit puts students first. As the student-first connected learning platform, Students Orbit  strives to improve the overall return on 
     investment in education by helping students learn more in less time and at a free of cost. We know the value of your time and strive hard to 
     deliver the best and invest in it with precision.
     We're committed to helping students succeed!
     <br/><br/>
  </h2>
  <h2 align="right">
     <span  class="abt-qts">We DREAM BIG<br/></span>
     <span class="abt-qts">We DECIDE ,DEBATE and DO<br/></span>
     <span class="abt-qts">We're ONE TEAM ,We're STUDENTS ORBIT<br/></span>
     <span class="abt-qts">INNOVATION is a way of life</span>
  </h2>
</div>
  </div>
);
};

export default About;