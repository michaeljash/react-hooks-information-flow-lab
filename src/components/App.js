import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const items = [
    { id: 1, name: 'Milk', category: 'grocery' },
    { id: 2, name: 'T-shirt', category: 'clothing' },
    { id: 3, name: 'Laptop', category: 'electronics' },
  ];

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
