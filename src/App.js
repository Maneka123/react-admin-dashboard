import React, { useState } from 'react';
import './styles.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div>
      <Header />
      <div className="main-container">
        <Nav setPage={setPage} />
        <Main page={page} />
      </div>
    </div>
  );
}

export default App;