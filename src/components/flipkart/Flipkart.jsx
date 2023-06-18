import React from 'react';
import { useState } from 'react';
import './Flipkart.css';

export default function Flipkart() {

const [selectedButton, setSelectedButton] = useState([false, false]);
const [show, setShow] = useState(false);
const [list, setList] = useState([
{name : 'My Profile', id : 1, isSelected : false},
{name : 'SuperCoin-Zone', id : 2, isSelected : false},
{name : 'Flipkart Plus Zone', id : 3, isSelected : false},
{name : 'Orders', id : 4, isSelected : false},
{name : 'Wishlist', id : 5, isSelected : false},
{name : 'Coupons', id : 6, isSelected : false},
{name : 'Gilf Cards', id : 7, isSelected : false},
{name : 'Notifications', id : 8, isSelected : false},
{name : 'Log Out', id : 9, isSelected : false}
]);

const buttons = [
    { id: 1, text: 'Button 1' },
    { id: 2, text: 'Button 2' },
  ];

function handleClick(itemObject) {
    setList((prev) => {
        return prev.map((each) => {
            if (each.id == itemObject.id) return { ...each, isSelected: !each.isSelected };
            else {
                return each
            }
        })
    })
}

function handleButtonClick(index){
    setSelectedButton(index)
}

  return (
    <>
    <div className='Navigation-bar'>
        <h1 className='logo'>LOGO.</h1>
      <input placeholder='search your product'></input>
      <button className='btn' onClick={() => {setShow(!show)}}>Vandana</button>
      {show ? <div className="flex">
                {
                    list.map((each, index) => {
                        return <button

                            className={`${each.isSelected ? "selected" : "notselected"}`}

                            onClick={() => {
                                handleClick(each);
                            }}>
                            {each.name}
                        </button>
                    })
                }
            </div> : <></>}
    </div>

    <div className='Navigation-2'>
      {buttons.map((button) => (
        <button className='btn-2'
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          style={{ borderBottom: selectedButton === button.id ? '2px solid #2874F0' : 'none' }}
        >
          {button.text}
        </button>
      ))}
    </div>

    </>
  )
}
