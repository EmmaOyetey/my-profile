import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestComponent from './components/testComponent' // Import the TestComponent

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestComponent />} /> {/* Route to the TestComponent */}
      </Routes>
    </Router>
  );
};

export default App;
