import React from 'react';
import { useState } from 'react';
import './ScoreGame.css';

export default function ScoreGame() {

  const [start, setStart] = useState(false);
  const [number, setNumber] = useState(0);
  const [arr, setArr] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90]);

  function operation(a){
    if(start) setNumber(number + a);
  }
 
  //this is for suffling and setting
  const shuffledArray = () => { 
    const shuffledArray = [...arr];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setArr(shuffledArray);
  };

 //this function is for start button
  function handleStart(){
    setNumber(0);    //It will reset 0 to restart
    setStart(true);  //it is for allowing user to click
    const intervalId = setInterval(() => {shuffledArray()}, 1000); //it is for suffling after 1 second
    setTimeout(() => {setStart(false) ; clearInterval(intervalId)}, 5000); // it is for stoping the counter as well as for stoping the suffling after 5 second
    
  }


  return (
    <div>

      <h1>Total Score : {number}</h1>
      {arr.map((each) => {
        return <button style={{borderStyle:'none',borderRadius:'2px',color : 'white', backgroundColor: each == 90 ? 'red' : '#0000' + each}} onClick={() => { operation(each) }}>{each}</button>
      })}

      {/* <button onClick={() => { operation(10) }}>10</button>
      <button onClick={() => { operation(20) }}>20</button>
      <button onClick={() => { operation(30) }}>30</button>
      <button onClick={() => { operation(40) }}>40</button>
      <button onClick={() => { operation(50) }}>50</button>
      <button onClick={() => { operation(60) }}>60</button>
      <button onClick={() => { operation(70) }}>70</button>
      <button onClick={() => { operation(80) }}>80</button>
      <button onClick={() => { operation(90) }}>90</button>  */}

      <div>
        <br></br>
        <button onClick={() => { handleStart() }} >Start</button>
      </div>
    </div>
  )
}

//9 score button
//1 score card
//start button
//2 sec time duration
