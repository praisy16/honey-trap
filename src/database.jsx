// Database.jsx
import React from 'react';
import { Link } from 'react-router-dom';




const Database = () => {
  
  return (
    <div>
      <h2>Database</h2>
      <p>This is the Database component.</p>
      <Link to="/"><button type="button" className="redirect-button">Home</button></Link>
    </div>
  );
};

export default Database;