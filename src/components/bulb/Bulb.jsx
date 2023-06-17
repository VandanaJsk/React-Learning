import React from 'react';
import { useState } from 'react';
import './Bulb.css';

export default function Bulb() {

  const [bulbs, setBulbs] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);

  const handleBulbs = (index) => {
    const updatedBulbs = [...bulbs];
    updatedBulbs[index] = !updatedBulbs[index];
    setBulbs(updatedBulbs);
  };

  return (
    <>
      <div className='main-container'>
        {bulbs.map((each, index) => {
          return <div className='container' style={{ background: each ? 'yellow' : 'white' }} onClick={() => { handleBulbs(index) }}>Bulb - {index + 1}</div>
        })}
      </div>
    </>
  )
}

//Dev's method

// import { useState } from 'react';
// import './App.css';

// // props , states 
// function App() {


//   const [bulbs, setBulbs] = useState([
//     { color: 'red', id: 1, isOn: false },
//     { color: 'blue', id: 2, isOn: false },
//     { color: 'green', id: 3, isOn: false },
//     { color: 'cyan', id: 4, isOn: false },
//     { color: 'lime', id: 5, isOn: false }
//   ])

//   function handleClick(id) {

//     setBulbs((prev) => {

//       return prev.map((each) => {
//         if (each.id == id) return { ...each, isOn: !each.isOn }
//         else {
//           return each;
//         }
//       }) //=>[]

//     })

//   }
//   return <>

//     {
//       bulbs.map((each, i) => {
//         return <div
//           key={each.id}
//           onClick={() => handleClick(each.id)}
//           style={{ backgroundColor: each.isOn ? each.color : 'white' }}>
//           {each.color}
//         </div>
//       })
//     }

//   </>


// }

// export default App;
