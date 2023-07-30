import { Route, Routes, useLocation } from 'react-router-dom';

//Pages
import { Home, About } from './pages';

// components
import { Sidebar } from './components';

import './App.scss';

function App() {
  const location = useLocation();

  return (
    <>
      <Sidebar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
