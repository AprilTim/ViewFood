import React from 'react';
import './App.scss';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <div className="main">
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <div className="content">
        <Sidebar sidebar={sidebar} />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
