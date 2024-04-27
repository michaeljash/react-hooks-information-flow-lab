import React from 'react';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items, selectedCategory, onCategoryChange }) {
  return (
    <div>
      <Filter onCategoryChange={onCategoryChange} />
      <ul>
        {items.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
