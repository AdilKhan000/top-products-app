import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getProducts = async (category, params) => {
  try {
    const response = await axios.get(`${API_URL}/categories/${category}/products`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductDetails = async (category, productId) => {
  try {
    const response = await axios.get(`${API_URL}/categories/${category}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};
