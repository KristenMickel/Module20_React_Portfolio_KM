import React from 'react';
import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: 'blue',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>John Doe's Page</h1>
    </header>
  );
}

export default Header;
