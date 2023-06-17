import React from 'react';
import {useState} from 'react';
import './TodoList.css';

export default function TodoList() {

const [done, setDone] = useState([]);
const [todos, setTodos] = useState(['1', '2', '3', '4', '5', '6']);

const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleToggleDone = (index) => {
   setDone((prevDone) => {
     const updatedDone = [...prevDone];
     updatedDone[index] = !updatedDone[index];
     return updatedDone;
   });
 };
  
  return (
    <>
    <div className='container2'>
 
    {todos.map((each, index) => {
      return  <div className='item-box' key = {index}>
         
        <button onClick = {() => {handleToggleDone(index)}}>Done</button>

        <p style={{ textDecoration: done[index] ? 'line-through' : 'none' }}>Todo List Item - {each}</p>

        <button onClick = {() => {handleDeleteTodo(index)}}>Delete</button>
     </div>

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


//   const [toDoList, setToDoList] = useState([
//     { text: 'I am bad boy', compeleted: false, id: 1 },
//     { text: 'I dont like you ', compeleted: false, id: 2 },
//     { text: 'I like you ', compeleted: false, id: 3 },
//     { text: 'I like ladooo', compeleted: false, id: 4 },
//     { text: 'I like ladooo', compeleted: false, id: 5 },
//     { text: 'but I like lolipop', compeleted: false, id: 6 },
//     { text: 'but I like samosa', compeleted: false, id: 7 },
//   ]);





//   function handleDone(id) {

//     setToDoList((prev) => {

//       return prev.map((each) => {
//         return each.id == id ? { ...each, compeleted: true } : each
//       });

//     })

//     // const newArr = toDoList.map((each) => {
//     //   if (each.id == id) {
//     //     return { ...each, compeleted: true };
//     //   }
//     //   else {
//     //     return each;
//     //   }
//     // })
//     // setToDoList(newArr);

//   }
//   function handleDelete(id) {
//     const newArr = toDoList.filter((each) => {
//       if (each.id == id) {
//         return false;
//       }
//       else {
//         return true;
//       }
//     })
//     setToDoList(newArr);

//   }
//   return (

//     <>
//       {
//         toDoList.map((each, i) => {
//           return <div key={i} className="work">
//             <button disabled={each.compeleted} onClick={() => { handleDone(each.id) }}  >Done</button>
//             <p className={`${each.compeleted ? "stroked" : ""}`} >{each.text}</p>
//             <button onClick={() => { handleDelete(each.id) }} >Delete</button>
//           </div>
//         })
//       }
//     </>
//   );
// }

// export default App;
