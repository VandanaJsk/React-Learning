import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Slider from '../components/slider/Slider';
import Products from '../components/products/Products';

export default function Screen() {

    const [clicked, setClicked] = useState("flipkart");

  return (
    <div>
      <Navbar/>
      <Slider selected={clicked} setSelected={setClicked}/>
      <Products selected = {clicked} />
    </div>
  )
}
