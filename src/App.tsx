// function App() {
//   return (
//     <div>
//       <h1>Emma Oyetey</h1>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route to the TestComponent */}
      </Routes>
    </Router>
  );
};

export default App;
