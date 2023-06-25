import { useState } from "react";
import "./App.css";
import ItemScreen from "./screens/itemsScreen/ItemScreen";
import PhoneProducts from "./phoneProducts/PhoneProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneDetails from "./phoneDetails/PhoneDetails";
// birth -> badahona - growth youth -->   death
// mounting -> state changes (update) -> unmounting

// props , states
function App() {
  //common props from parent to children
  const [id, setId] = useState(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello Routes</h1>} />
        <Route path="/phones" element={<PhoneProducts setId={setId} />} />
        <Route path="/phonedetails" element={<PhoneDetails id={id} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
