import React from 'react';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="ide-layout">
      <header className="ide-header">
        <div className="ide-logo">CodeApply IDE</div>
        <nav className="ide-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main className="ide-main-content">{children}</main>
      <footer className="ide-footer">
        <p>&copy; 2023 CodeApply IDE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;