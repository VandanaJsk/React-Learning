import React from 'react';
import './Home.css';
import NewNavbar from '../newNavbar/NewNavbar';

export default function Home() {
  return (
    <>
    <div className='home-wrapper'>
      <NewNavbar/>
      <h1 className='heading'>Welcome To My App</h1>
    </div>
    </>
  )
}
