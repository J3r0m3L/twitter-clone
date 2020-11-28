import React from 'react';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;
