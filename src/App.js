import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlockChain from './pages/Clubs/BlockChain';
import Blog from './pages/Blog';
import IndividualCard from './components/IndividualCard';
import ContactUs from './pages/ContactUs';
import Developer from './pages/Developer';
import Events from './pages/Events';
import DSAI from './pages/Clubs/Dsai';
import Ingenuity from './pages/Clubs/Ingenuity';
import Electromos from './pages/Clubs/Electromos';
import SES from './pages/Clubs/Ses';
import Epsilon from './pages/Clubs/Epsilon';
import Openlake from './pages/Clubs/Openlake';
import Motorsports from './pages/Clubs/Motorsports';
import GDSC from './pages/Clubs/Gdsc';
import Gallery from './pages/Gallery';
import PageNotFound from './pages/PageNotFound';
import AchievementsPage from './pages/Achievements';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact-us'element={<ContactUs />}></Route>
      <Route path='/events' element={<Events />}></Route>
      <Route path='/achievements' element={<AchievementsPage />}></Route>
      <Route path='/blogs' element={<Blog />}></Route>
      <Route path='/developer' element={<Developer />}></Route>
      <Route path='/gallery' element={<Gallery />}></Route>
      <Route path='/blogs/individual/:value' element={<IndividualCard />}></Route>
      <Route path='/club/dsai' element={<DSAI />}></Route>
      <Route path='/club/blockchain' element={<BlockChain />}></Route>
      <Route path='/club/ingenuity' element={<Ingenuity />}></Route>
      <Route path='/club/electromos' element={<Electromos />}></Route>
      <Route path='/club/ses' element={<SES />}></Route>
      <Route path='/club/epsilon' element={<Epsilon />}></Route>
      <Route path='/club/openlake' element={<Openlake />}></Route>
      <Route path='/club/motorsports' element={<Motorsports />}></Route>
      <Route path='/club/gdsc' element={<GDSC />}></Route>

      <Route path="*" element={<PageNotFound/>}></Route>



    </Routes>
  );
}

export default App;
