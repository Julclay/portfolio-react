import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Contact(props) {
  return (
    <div>
      <h1 class = "text-center">Contact Page</h1>
      <p class = "text-center">
        You can contact me for porject partnership or learning opportunities 
      </p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        
      </Routes>
    </div>
  );
}

export default Contact;
