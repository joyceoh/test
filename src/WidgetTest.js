// App.js - Complete React Grid Layout Test Application
import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import 'react-grid-layout/css/resizable.css';
import './App.css'; // See CSS below

function App() {
  // Initial layout configuration
  const [layout, setLayout] = useState([
    { i: 'widget-1', x: 0, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
    { i: 'widget-2', x: 2, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
    { i: 'widget-3', x: 4, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
    { i: 'widget-4', x: 0, y: 2, w: 3, h: 2, minW: 2, minH: 2 },
    { i: 'widget-5', x: 3, y: 2, w: 3, h: 2, minW: 2, minH: 2 },
  ]);

  const [isDraggable, setIsDraggable] = useState(true);
  const [isResizable, setIsResizable] = useState(true);
  const [compactType, setCompactType] = useState('vertical');
  const [cols, setCols] = useState(12);
  const [rowHeight, setRowHeight] = useState(30);

  // Handle layout changes
  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
    console.log('Layout changed:', newLayout);
  };

  // Add new widget
  const addWidget = () => {
    const newWidget = {
      i: `widget-${Date.now()}`,
      x: 0,
      y: Infinity, // Places at bottom
      w: 2,
      h: 2,
      minW: 1,
      minH: 1,
    };
    setLayout([...layout, newWidget]);
  };

  // Remove widget
  const removeWidget = (id) => {
    setLayout(layout.filter(item => item.i !== id));
  };

  // Reset layout
  const resetLayout = () => {
    setLayout([
      { i: 'widget-1', x: 0, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
      { i: 'widget-2', x: 2, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
      { i: 'widget-3', x: 4, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
      { i: 'widget-4', x: 0, y: 2, w: 3, h: 2, minW: 2, minH: 2 },
      { i: 'widget-5', x: 3, y: 2, w: 3, h: 2, minW: 2, minH: 2 },
    ]);
  };

  // Event handlers for debugging
  const onDragStart = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log('Drag Start:', newItem);
  };

  const onDrag = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log('Dragging:', newItem);
  };

  const onDragStop = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log('Drag Stop:', newItem);
  };

  const onResizeStart = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log('Resize Start:', newItem);
  };

  const onResize = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log('Resizing:', newItem);
  };

  const onResizeStop = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log('Resize Stop:', newItem);
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

    const handleClick = () => pendoActivate('b1baff48-0a11-41a1-867e-960ad4b8bafd');


  return (
    <div className="app">
      <header className="controls">
        <button type="button" onClick={handleClick}>Pendo</button> 
        <h1>React Grid Layout Test Application</h1>
        
        <div className="control-panel">
          <div className="control-group">
            <button onClick={addWidget}>Add Widget</button>
            <button onClick={resetLayout}>Reset Layout</button>
          </div>

          <div className="control-group">
            <label>
              <input
                type="checkbox"
                checked={isDraggable}
                onChange={(e) => setIsDraggable(e.target.checked)}
              />
              Draggable
            </label>
            <label>
              <input
                type="checkbox"
                checked={isResizable}
                onChange={(e) => setIsResizable(e.target.checked)}
              />
              Resizable
            </label>
          </div>

          <div className="control-group">
            <label>
              Compact Type:
              <select
                value={compactType}
                onChange={(e) => setCompactType(e.target.value || null)}
              >
                <option value="vertical">Vertical</option>
                <option value="horizontal">Horizontal</option>
                <option value="">None</option>
              </select>
            </label>
          </div>

          <div className="control-group">
            <label>
              Columns:
              <input
                type="number"
                value={cols}
                onChange={(e) => setCols(parseInt(e.target.value))}
                min="1"
                max="24"
              />
            </label>
            <label>
              Row Height:
              <input
                type="number"
                value={rowHeight}
                onChange={(e) => setRowHeight(parseInt(e.target.value))}
                min="10"
                max="100"
              />
            </label>
          </div>
        </div>
      </header>

      <div className="grid-container">
        <GridLayout
          className="layout"
          layout={layout}
          cols={cols}
          rowHeight={rowHeight}
          width={1200}
          isDraggable={isDraggable}
          isResizable={isResizable}
          compactType={compactType}
          preventCollision={false}
          onLayoutChange={onLayoutChange}
          onDragStart={onDragStart}
          onDrag={onDrag}
          onDragStop={onDragStop}
          onResizeStart={onResizeStart}
          onResize={onResize}
          onResizeStop={onResizeStop}
          draggableHandle=".drag-handle"
        >
          {layout.map((item) => (
            <div key={item.i} className="grid-item">
              <div className="widget-header">
                <span className="drag-handle">⋮⋮</span>
                <span className="widget-title">{item.i}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeWidget(item.i)}
                >
                  ×
                </button>
              </div>
              <div className="widget-content">
                <p>x: {item.x}, y: {item.y}</p>
                <p>w: {item.w}, h: {item.h}</p>
              </div>
            </div>
          ))}
        </GridLayout>
      </div>

      <footer className="debug-info">
        <h3>Current Layout (JSON):</h3>
        <pre>{JSON.stringify(layout, null, 2)}</pre>
      </footer>
    </div>
  );
}

export default App;
