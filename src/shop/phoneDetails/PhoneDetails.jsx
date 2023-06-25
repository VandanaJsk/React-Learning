import React, { useState } from "react";
import "./PhoneDetails.css";
import { useEffect } from "react";
import axios from "axios";
import Carousel from "../carousel/Carousel";

const link = "https://dummyjson.com/products";

export default function PhoneDetails(props) {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(link + "/" + props.id).then((res) => {
      setData(res.data);
    });
  }, [props.id]);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data?.brand}</h1>
          <p>{data.title}</p>
          <Carousel images={data.images} />
        </div>
      ) : (
        <div>No data Found</div>
      )}
    </div>
  );
}
