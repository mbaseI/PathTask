import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<div>Sorry, that page does not exist</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
