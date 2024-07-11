import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="subtitle1">{product.company}</Typography>
              <Typography variant="body2">{product.price}</Typography>
              <Typography variant="body2">{product.rating}</Typography>
              <Link to={`/products/${product.id}`}>View Details</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
