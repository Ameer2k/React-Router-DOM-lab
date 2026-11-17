import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";

function ProductDetails() {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();
  async function getProduct() {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/products/${productId}`,
    );
    console.log(response.data);
    setProduct(response.data);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <p>Title: {product.title}</p>
          <p>description: {product.description}</p>
          <p>category: {product.category}</p>
          <p>price: {product.price}</p>
          <p>quantity: {product.quantity}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetails;
