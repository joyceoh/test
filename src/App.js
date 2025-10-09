import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WidgetTest from './WidgetTest';
import AccordionTest from './AccordionTest';
import './Navigation.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Widget Test</Link>
            </li>
            <li>
              <Link to="/accordion">Accordion Test</Link>
            </li>
          </ul>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<WidgetTest />} />
            <Route path="/accordion" element={<AccordionTest />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
