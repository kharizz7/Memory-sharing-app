import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>
         CSE  FAM  21-25
      </Link>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#66ccff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: 1000
  },
  link: {
    fontFamily: 'Comic Sans MS',
    fontSize: '1.5em',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Navbar;
