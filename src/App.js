import './App.css';
import SideBar, { MobileSideBar } from './components/SideBar';
import SVG from './components/SVG'
import NavBar from './components/NavBar'
import Overview from './components/Overview'
import Visits from './components/Visits'
import Earnings from './components/Earnings'
import Store, { initialState } from './store/store'
import { useState } from 'react';

function App() {
  const [state, setState] = useState(initialState)
  return (
    <Store.Provider value={{ state, setState }}>
      <SVG />
      <div className='flex'>
        <MobileSideBar/>
        <SideBar />

        <div className='flex flex-col w-full'>
          <NavBar />
          <Earnings />
        </div>
      </div>
    </Store.Provider>
  );
}

export default App;
