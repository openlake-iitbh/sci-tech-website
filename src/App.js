import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlockChain from './pages/Clubs/BlockChain';
import Blog from './pages/Blog';
import IndividualCard from './components/IndividualCard';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact-us'element={<ContactUs />}></Route>
      <Route path='/blockchain' element={<BlockChain />}></Route>
      <Route path='/blogs' element={<Blog />}></Route>
      <Route path='/blogs/individual/:value' element={<IndividualCard />}></Route>



    </Routes>
  );
}

export default App;
