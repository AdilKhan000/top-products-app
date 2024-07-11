import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minPrice: '',
    maxPrice: '',
    rating: '',
  });

  const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];
  const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];

  const fetchProducts = async () => {
    try {
      const data = await getProducts(filters.category, {
        company: filters.company,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice,
        rating: filters.rating,
        n: 10,
      });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (filters.category) {
      fetchProducts();
    }
  }, [filters]);

  return (
    <div>
      <Filter filters={filters} setFilters={setFilters} categories={categories} companies={companies} onApplyFilters={fetchProducts} />
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;
