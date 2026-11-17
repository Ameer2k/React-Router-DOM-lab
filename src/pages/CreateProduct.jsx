import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Stops the form from refreshing and disables default behavior
    // TODO: send POST request to the API with the student Data
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/products`,
      formData,
    );
    navigate("/products");
  }

  return (
    <div>
      <h1>Create Products</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description">description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="city">category: </label>
        <input
          type="text"
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        />
        <label htmlFor="city">price: </label>
        <input
          type="text"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="city">quantity: </label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <button>Create Products</button>
      </form>
    </div>
  );
}

export default CreateProduct;
