import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const Contact = () => {
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
         <div class="contact-box">
            <div class="contact">
              <form action="/action_page.php">
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message:</p>
                <input type="text" id="fname" name="firstname" placeholder="Your First Name.."/>
                <input type="text" id="lname" name="lastname" placeholder="Your Last Name.."/>
                <input type="text" id="mail" name="email" placeholder="Your Mail.."/>
                <select id="country" name="country">
                  <option value="null">Select Country</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                </select>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
                <button type="submit" value="Submit">Submit</button>
              </form>
            </div>
          </div>
   </body>
  </div>
);
};

export default Contact;