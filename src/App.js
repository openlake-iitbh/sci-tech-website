import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlockChain from './pages/Clubs/BlockChain';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/blockchain' element={<BlockChain />}></Route>
    </Routes>
  );
}

export default App;
