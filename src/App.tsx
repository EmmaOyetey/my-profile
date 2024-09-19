import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './containers/Home';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} /> 
//       </Routes>
//     </Router>
//   );
// };

// export default App;
