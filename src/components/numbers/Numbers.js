import React from 'react';
import './Numbers.css';
import { useState } from 'react';

function Numbers(){

    const [result, setResult] = useState('');
   return(
     <>
     <div>
        <h1>{result}</h1>
     </div>
     <div>
     <button onClick={() => {setResult(result + '1')}}>1</button>
     <button onClick={() => {setResult(result + '2')}}>2</button>
     <button onClick={() => {setResult(result + '3')}}>3</button>
     <button onClick={() => {setResult(result + '4')}}>4</button>
     <button onClick={() => {setResult(result + '5')}}>5</button>
     <button onClick={() => {setResult(result + '6')}}>6</button>
     <button onClick={() => {setResult(result + '7')}}>7</button>
     <button onClick={() => {setResult(result + '8')}}>8</button>
     <button onClick={() => {setResult(result + '9')}}>9</button>
     <button onClick={() => {setResult(result + '10')}}>10</button>
     </div>
     </>
   );
}

export default Numbers;