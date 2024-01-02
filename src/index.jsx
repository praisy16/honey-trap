import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; 

const HoneyTrap = () => {
  const [activeButton, setActiveButton] = useState('home'); 

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);

    // Smooth scrolling to sections(tabs)
    const scrollToSection = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    };

    switch(buttonId) {
      case 'home':
        scrollToSection('home-info');
        break;
      case 'about':
        scrollToSection('about-us-info');
        break;
      case 'disclaimer':
        scrollToSection('disclaimer-info');
        break;
      case 'database':
        scrollToSection('database-info');
        break;
      case 'submit-requests':
        scrollToSection('submit-request-form');
        break;
      case 'contact':
        scrollToSection('contact-info');
        break;  
      default:
        break;
    }
    
  };


  

  return (
    <div>


      {/* navbar */}
      <div id="navbar-root">
        <nav className="navbar">

        <img id="logo" src="logo1.png" alt="Honey Trap Logo"/>

          <div className="nav-items-container">
            <button id="home" className={`nav-item ${activeButton === 'home' ? 'active' : ''}`} onClick={() => handleButtonClick('home')}>Home</button>
            <button id="about" className={`nav-item ${activeButton === 'about' ? 'active' : ''}`} onClick={() => handleButtonClick('about')}>About</button>
            <button id="disclaimer" className={`nav-item ${activeButton === 'disclaimer' ? 'active' : ''}`} onClick={() => handleButtonClick('disclaimer')}>Disclaimer</button>
            <button id="database" className={`nav-item ${activeButton === 'database' ? 'active' : ''}`} onClick={() => handleButtonClick('database')}>Database</button>
            <button id="submit-requests" className={`nav-item ${activeButton === 'submit-requests' ? 'active' : ''}`} onClick={() => handleButtonClick('submit-requests')}>Submit Requests</button>
            <button id="contact" className={`nav-item ${activeButton === 'contact' ? 'active' : ''}`} onClick={() => handleButtonClick('contact')}>Contact us</button>
          </div>

        </nav>
      </div>



  
       {/* home page */}
      <div className="home-page" id="home-info">
        <h1>HoneyTrap</h1>
        <button className="get-started-bt" onClick={() => handleButtonClick('about')}>Get Started  &#10132;</button>
      </div>



      {/* about page */}
      <div className="about-page" id="about-us-info">
        <h2>About HoneyTrap</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro similique, quae fugit nemo reiciendis quos expedita eos tempore odit facilis voluptas labore aliquam enim libero iure incidunt officiis possimus praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sit in aliquam laborum quidem exercitationem tempore obcaecati at odio debitis facilis maiores minima asperiores accusantium odit, quam voluptatibus amet beatae?</p>
      </div>




      {/* disclaimer page */}
      <div className="disclaimer-page" id="disclaimer-info">
        <h2>Disclaimer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro similique, quae fugit nemo reiciendis quos expedita eos tempore odit facilis voluptas labore aliquam enim libero iure incidunt officiis possimus praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sit in aliquam laborum quidem exercitationem tempore obcaecati at odio debitis facilis maiores minima asperiores accusantium odit, quam voluptatibus amet beatae?</p>
      </div>





     {/* database page */}
      <div className="database-page" id="database-info">
        <h2>Database</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente aperiam rerum officiis perferendis possimus obcaecati inventore maiores autem deserunt rem, voluptatibus ullam maxime pariatur blanditiis velit eaque libero vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, temporibus, distinctio assumenda, magni atque soluta error repellendus nihil nemo provident quasi delectus quibusdam consequatur id velit quis doloribus quaerat doloremque?</p>
      </div>





       {/* submit requests page */}
      <div className="submit-requests-page" id="submit-request-form">
        <h2>Submit a Request</h2>
        <p>We acknowledge that sometimes errors can occur, and names added to our database might be inaccurate. If you find that your name has been listed incorrectly or without justification, this is the place where you can request its removal. </p>
        <form>
          <div className="form-group">
            <label htmlFor="userName">Name</label>
            <input type="text" id="userName" name="userName" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">Email</label>
            <input type="email" id="userEmail" name="userEmail" placeholder="Your email" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
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

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(rootDiv);
root.render(<HoneyTrap />);