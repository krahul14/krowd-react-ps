import React, { useState } from 'react';

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    },
    header: {
      fontSize: '24px',
      marginBottom: '20px'
    },
    inputContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px'
    },
    input: {
      padding: '8px',
      flex: '1',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '20px'
    },
    listItem: {
      margin: '8px 0'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Item List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter item"
          style={styles.input}
        />
        <button onClick={handleAddItem} style={styles.button}>
          Add Item
        </button>
      </div>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;