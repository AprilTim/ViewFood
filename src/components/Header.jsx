import React from 'react';

function Header({ sidebar, setSidebar }) {
  return (
    <header className="header">
      <span>ViewFOOD</span>
      <button onClick={() => setSidebar(!sidebar)} className="burger">
        <span></span>
      </button>
    </header>
  );
}

export default Header;
