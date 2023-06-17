import React from "react";
import './Counter.css';
import {useState} from 'react';

function Counter(){

    const [changeColor, setChangeColor] = useState('');

    return(
      <div>
        <button className="btn1" style={{backgroundColor : changeColor.length > 0 ? changeColor : 'pink'}} onClick={() => {setChangeColor('pink')}}>Pink</button>
        <button className="btn2" style={{backgroundColor : changeColor.length > 0 ? changeColor : 'cyan'}} onClick={() => {setChangeColor('cyan')}}>Cyan</button>
        <button className="btn3" style={{backgroundColor : changeColor.length > 0 ? changeColor : 'lime'}} onClick={() => {setChangeColor('lime')}}>Lime</button>
        <button onClick = {() => {setChangeColor('')}}>Reset</button>
      </div>
    );
}

export default Counter;