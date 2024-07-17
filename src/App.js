import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ApplicationForm from './components/ApplicationForm';
import ContactUs from './components/ContactUs';


function App() {
  return (
    
    <Router>
      

        <Routes>
        <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/apply" element={<ApplicationForm />} />
        </Routes>
      
    </Router>
  );
}

export default App;