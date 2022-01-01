import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

export function ProductDetail() {
  const { productId } = useParams();

  console.log({ productId });
  const {name, description} = products.find((product) => product.id === Number(productId));

//   console.log(vistaar)

  return (
    <div>
      <h1> {name} </h1>
      <h2>{description}</h2>
      I am a product
    </div>
  );
}
