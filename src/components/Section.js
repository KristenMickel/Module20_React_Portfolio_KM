import React from 'react';
import '../styles/Section.css';

const styles = {
  sectionStyles: {
    background: 'white',
  },
};

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>John Doe</h2>
      <li> <a href="#">About Me</a></li>
      <li> <a href="#">Portfolio</a></li>
      <li> <a href="#">Contact</a></li>
      <li> <a href="#">Resume</a></li>
    </section>
  );
}

export default Section;
