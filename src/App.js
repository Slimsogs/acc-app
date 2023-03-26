import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './pages/Home';
import Start from './pages/Start';
import Sundays from './pages/Sundays';
import About from './pages/About';
import Serve from './pages/Serve';
import Baptism from './pages/Baptism';
import Prayer from './pages/Prayer';
import Outreach from './pages/Outreach';
import Contact from './pages/Contact';
import RottHome from './pages/Rotterdam/Home';
import RottSundays from './pages/Rotterdam/Sundays';
import AmsHome from './pages/Amsterdam/Home';
// import AmsSundays from './components/Amsterdam/AmsSundays';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='start' element={<Start/>}/>
        <Route path='/amsterdam/sundays' element={<Sundays/>}/>
        <Route path='/us' element={<About/>}/>
        <Route path='/serve' element={<Serve/>}/>
        <Route path='/baptism' element={<Baptism/>}/>
        <Route path='/prayer-request' element={<Prayer/>}/>
        <Route path='/outreach' element={<Outreach/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* Rotterdam */}
        <Route path='/rotterdam' element={<RottHome/>}/>
        <Route path='/rotterdam/sundays' element={<RottSundays/>}/>
        {/* Amsterdam */}
        <Route path='/amsterdam' element={<AmsHome/>}/>
        {/* <Route path='/amsterdam/sundays' element={<AmsSundays/>}/> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
