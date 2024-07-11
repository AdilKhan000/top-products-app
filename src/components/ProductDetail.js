import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../api';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetail = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductDetails('categoryname', productid); 
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productid]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="subtitle1">{product.company}</Typography>
        <Typography variant="body2">Price: {product.price}</Typography>
        <Typography variant="body2">Rating: {product.rating}</Typography>
        <Typography variant="body2">Discount: {product.discount}</Typography>
        <Typography variant="body2">Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
