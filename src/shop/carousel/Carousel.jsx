import React from "react";
import "./Carousel.css";
import { useState } from "react";
import { useEffect } from "react";
export default function Carousel(props) {
  const [selected, setSelected] = useState(0);
  const size = props.images.length;

  // autia mtic
  useEffect(() => {
    const id = setInterval(() => {
      setSelected((prev) => (prev + 1 + size) % size);
    }, 2000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="carausel-wrapper">
      <button
        onClick={() => {
          setSelected((selected - 1 + size) % size);
        }}
        className="carausel-btn"
      >
        {"<"}
      </button>
      <div className="carausel-all-img">
        {props.images.map((each, index) => {
          return (
            <div
              key={index}
              className={selected == index ? "carausel-div" : "notselected"}
            >
              <img className="carausel-img" src={each} alt="" />
            </div>
          );
        })}
      </div>

      <button
        className="carausel-btn"
        onClick={() => {
          setSelected((selected + 1 + size) % size);
        }}
      >
        {">"}
      </button>
    </div>
  );
}
