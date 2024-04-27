import React from 'react';

function Filter({ onCategoryChange }) {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filter by category:</label>
      <select id="category" onChange={handleChange}>
        <option value="all">All</option>
        <option value="grocery">Grocery</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        {/* Add other category options as needed */}
      </select>
    </div>
  );
}

export default Filter;
