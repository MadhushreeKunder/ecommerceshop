import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

export function ProductDetail() {
  const { productId } = useParams();

  console.log({ productId });
  const {name, description, img, price} = products.find((product) => product.id === Number(productId));

  return (
    <div>
        <img src={img}/>
      <h1> {name} </h1>
      <h2>Price: Rs. {price}</h2>
      <p>{description}</p>
      I am a product
    </div>
  );
}
