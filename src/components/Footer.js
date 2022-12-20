import React from 'react';
import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: 'blue',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function Footer() {
  return (
    <header style={styles.footerStyle} className="Footer">
      <h1 style={styles.headingStyle}></h1>
    </header>
  );
}

export default Footer;

