import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'
import './index.css'

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App
