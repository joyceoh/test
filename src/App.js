import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WidgetTest from './WidgetTest';
import AccordionTest from './AccordionTest';
import './Navigation.css';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  function pendoActivate(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo-dev.pendo-dev.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);

        // Wait for Pendo to load, then initialize
        y.onload = function() {
            // This function creates visitors and accounts in Pendo
            // You will need to replace <visitor-id-goes-here> and <account-id-goes-here> with values you use in your app
            // Please use Strings, Numbers, or Bools for value types.
            window.pendo.initialize({
                visitor: {
                    id:              321890 // Required if user is logged in
                    // email:        // Recommended if using Pendo Feedback, or NPS Email
                    // full_name:    // Recommended if using Pendo Feedback
                    // role:         // Optional

                    // You can add any additional visitor level key-values here,
                    // as long as it's not one of the above reserved names.
                },

                account: {
                    id:              123890,// Highly recommended, required if using Pendo Feedback or OEM Adopt
                    // name:         // Optional
                    // is_paying:    // Recommended if using Pendo Feedback
                    // monthly_value:// Recommended if using Pendo Feedback
                    // planLevel:    // Optional
                    // planPrice:    // Optional
                    // creationDate: // Optional

                    // You can add any additional account level key-values here,
                    // as long as it's not one of the above reserved names.
                }
            });
        };
    })(window,document,'script','pendo');
  }

  // Run Pendo activation when component mounts
  useEffect(() => {
    pendoActivate('b1baff48-0a11-41a1-867e-960ad4b8bafd');
  }, []); // Empty dependency array means this runs once on mount
  return (
    <Router>
      <div className="app-container" mode={mode}>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/test/widget">Widget Test</Link>
            </li>
            <li>
              <Link to="/test/accordion">Accordion Test</Link>
            </li>
            <li>
                <button>RC Help</button>
            </li>
            <li>
                <button onClick={toggleMode}>
                  {mode === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
                </button>
            </li>
          </ul>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/test" element={<WidgetTest />} />
            <Route path="/test/accordion" element={<AccordionTest />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
