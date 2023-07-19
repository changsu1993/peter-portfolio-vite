import { Route, Routes, useLocation } from 'react-router-dom';
import { About } from './pages';

import './App.scss';

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
