import React from 'react';
import { useState } from 'react';
import './BlueBorder.css';

export default function BlueBorder() {

  const [selected, setSelected] = useState('');
  const [show, setShow] = useState(false);

  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <>
      <div className='main-container'>
        <div className='container' style = {{display: show == true ? 'flex' : 'none'}}>

          {arr.map((each, index) => {
            return <div className='items' style={{ border: selected == each ? '2px solid blue' : '2px solid grey', }} onClick={() => { setSelected(each) }}>Box-{each}</div>
          })}
         
        </div>
        <br></br>
        <button onClick={() => { setShow(!show) }} >{ !show ? 'Show' : 'Hide'}</button>
      </div>
    </>
  )

}