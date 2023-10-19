import './App.css';
import SideBar, { MobileSideBar } from './components/sidebar';
import SVG from './components/svg'
import NavBar from './components/navbar'
import Content from './components/content'
import Store from './store/store'
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState({ mobileSideBar: false })
  return (
    <Store.Provider value={{ state, setState }}>
      <SVG />
      <div className='flex'>
        <MobileSideBar/>
        <SideBar />

        <div className='flex flex-col w-full'>
          <NavBar />
          <Content />
        </div>
      </div>
    </Store.Provider>
  );
}

export default App;
