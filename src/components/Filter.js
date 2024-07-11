import React from 'react';
import { TextField, MenuItem, Button } from '@mui/material';

const Filter = ({ filters, setFilters, categories, companies, onApplyFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <TextField
        select
        label="Category"
        name="category"
        value={filters.category}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Company"
        name="company"
        value={filters.company}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      >
        {companies.map((company) => (
          <MenuItem key={company} value={company}>
            {company}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Min Price"
        name="minPrice"
        value={filters.minPrice}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Max Price"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Rating"
        name="rating"
        value={filters.rating}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={onApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};

export default Filter;
