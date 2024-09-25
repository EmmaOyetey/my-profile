import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Digital from "./pages/Digital/Digital";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital" element={<Digital />}></Route>
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
