import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Axios() {

    const [mydata, setMydata] = useState([]);
    console.log(mydata, "you")

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then((res) => {
            console.log(res.data.products, "me");
            setMydata(res.data.products);
        })
    }, []) 

    return (
        <>
            <h1>Axios Tutorial</h1>
            <div className='axios-wrapper'>
                {
                    mydata.map((each) => {
                        return(
                            <div className='card' key={each.id}>
                                <h2>{each.title}</h2>
                                <p>{each.description}</p>
                                <div><img src={each.images[2]} alt="" /></div>
                            </div>
                        )
                    })
                }
             </div>
        </>
    )
}
