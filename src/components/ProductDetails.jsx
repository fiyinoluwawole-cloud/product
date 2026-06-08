import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`).then((res) => setProduct(res.data));}, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img src={product.images[0]} alt={product.title} />
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <h3>{product.category}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;