// Database.jsx
import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Subreq from './subreq';
import './style.css';



const Database = () => {

  const [activeButton, setActiveButton] = useState('home'); 
  const [navActive, setNavActive] = useState(false); 
  const navigate = useNavigate();

 const handleButtonClick = (buttonId) => {
  setActiveButton(buttonId); 
};



  return (
    <div>
    {/* navbar */}
    <div id="navbar-root">
      <nav className="navbar">


        {/* Conditionally render the logo based on navActive state */}
        {!navActive && (
          <img 
            id="logo" 
            src="logo1.png" 
            alt="Honey Trap Logo" 
            onClick={() => navigate('/')}
              />
        )}

   

        {/* Navigation items */}
        <div className={`nav-items-container ${navActive ? 'nav-active' : ''}`}>

        <Link
        to="/"
        className={`nav-item ${activeButton === 'home' ? 'active' : ''}`}
        onClick={() => handleButtonClick('home')}
      >
        Home
      </Link>
      
      
      <Link
        to="/"
        className={`nav-item ${activeButton === 'about' ? 'active' : ''}`}
        onClick={() => handleButtonClick('about')}
      >
        About
      </Link>



      <Link
        to="/"
        className={`nav-item ${activeButton === 'disclaimer' ? 'active' : ''}`}
        onClick={() => handleButtonClick('disclaimer')}
      >
        Disclaimer
      </Link>
          

         <Link to="/database"
              className={`nav-item ${activeButton === 'database' ? 'active' : ''}`}
              onClick={() => handleButtonClick('database')}>
              Database
          </Link>
          
        
        
          <Link
        to="/"
        className={`nav-item ${activeButton === 'contact' ? 'active' : ''}`}
        onClick={() => handleButtonClick('contact')}
      >
        Contact Us
      </Link>
       
             </div>

      </nav>
    </div>


   {/* database page */}
    <div className="database-inner-page" id="database-info">
      <h2>Database</h2>
      <table className="database-table">
          <thead>
            <tr>
              <th>Profile Name</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td><a href="https://facebook.com/johndoe">https://facebook.com/johndoe</a></td>
            </tr>
            {/* Additional rows go here */}
          </tbody>
        </table>
    
    </div>



 {/* contact us page */}
  <footer class="contact-us-page" id = "contact-info">
   <div class="container">
    <div class="row">
     


      {/* footer column 1 */}
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
           <li><button id="about" className={`link-button ${activeButton === 'about' ? 'active' : ''}`} onClick={() => handleButtonClick('about')}>About</button></li> 
          <li><button id="disclaimer" className={`link-button ${activeButton === 'disclaimer' ? 'active' : ''}`} onClick={() => handleButtonClick('disclaimer')}>Disclaimer</button></li> 
          <li><button id="database" className={`link-button ${activeButton === 'database' ? 'active' : ''}`} onClick={() => handleButtonClick('database')}>Database</button></li> 
          <li><button id="submit-requests" className={`link-button ${activeButton === 'submit-requests' ? 'active' : ''}`} onClick={() => handleButtonClick('submit-requests')}>Submit Requests</button></li> 
        </ul>
      </div>
     


     {/* footer column 2 */}
      <div class="footer-col">
      </div>
      <div class="footer-col">
        <h4>Contact us</h4>
        <div class="social-links">
        <a href="mailto:honeypot4316@example.com">
         <img src="email.png" alt="Email the creators" />
        </a>

        
        </div>
      </div>
    </div>
   </div>
</footer>

  </div>

  );
};




export default Database;