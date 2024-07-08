import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/blogs' element={<Blog />}></Route>

    </Routes>
  );
}

export default App;
