import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Igallery/Gallery';
import Notfound from './Pages/Notfound/Notfound';
import Plans from './Pages/Plans/Plans';
import Trainers from './Pages/Trainers/Trainers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import './App.css';
import Prayer1 from './Pages/Prayers/Prayer1';
import Prayer2 from './Pages/Prayers/Prayer2';
import Prayer3 from './Pages/Prayers/Prayer3';
import Prayer4 from './Pages/Prayers/Prayer4';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index  element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='Gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers/>} />
        <Route path='*' element={<Notfound />} />
        <Route path='prayer1' element={<Prayer1 />} />
        <Route path='prayer2' element={<Prayer2 />} />
        <Route path='prayer3' element={<Prayer3 />} />
        <Route path='prayer4' element={<Prayer4 />} />
      
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
