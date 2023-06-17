import React, { useState, useEffect } from 'react'
import Bulb from './Bulb';

export default function Dropdown() {
    console.log('top walal')
    const [show, setShow] = useState(false);
    const [list, setList] = useState([

        { item: 'Apple', isSelected: false, id: 1 },
        { item: 'Orange', isSelected: false, id: 2 },
        { item: 'Mango', isSelected: false, id: 3 },
        { item: 'iwiw', isSelected: false, id: 4 },
        { item: 'Guava', isSelected: false, id: 5 },
        { item: 'Lime', isSelected: false, id: 6 }
    ]);

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

    useEffect(() => {
        console.log('mounted');
        //only once when component is on  mounted;
        // alert('Welcome')
        return () => { console.log('I am dead') }  // unmounting phase 
    }, [])

    useEffect(() => {
        console.log('satetsare updatting ');
        // always when state changes  mouting + state change 
        // alert('See the item')
    }, [show, list]);


    // rendering 

    return (

        <div name="drodown">
            {console.log('render')}
            <button onClick={() => setShow(!show)}> Fruits ></button>
            {show ? <div className="flex">
                {
                    list.map((each, index) => {
                        return <button

                            className={`${each.isSelected ? "selected" : "notselected"}`}

                            onClick={() => {
                                handleClick(each);
                            }}>
                            {each.item}
                        </button>
                    })
                }
            </div> : <></>}

            {show ? <Bulb /> : <></>}
        </div>
    )
}
