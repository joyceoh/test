import React, { useState } from 'react';
import './AccordionTest.css';

function AccordionTest() {
  const [openItems, setOpenItems] = useState([0]); // First item open by default
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleItem = (index) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(i => i !== index)
        : [...prevOpenItems, index]
    );
  };

  const accordionData = [
    {
      title: 'Accordion Item 1',
      content: 'This is the content for accordion item 1. It contains information about the first section.'
    },
    {
      title: 'Accordion Item 2',
      content: 'This is the content for accordion item 2. Here you can add more detailed information.'
    },
    {
      title: 'Accordion Item 3',
      content: 'This is the content for accordion item 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Accordion Item 4',
      content: 'This is the content for accordion item 4. More content can be placed here.'
    }
  ];

  const openAll = () => {
    setOpenItems(accordionData.map((_, index) => index));
  };

  const closeAll = () => {
    setOpenItems([]);
  };

  return (
    <div className="accordion-test">
      <header className="accordion-header">
        <h1>Accordion Test Area</h1>
        <div className="control-buttons">
          <button onClick={openAll}>Open All</button>
          <button onClick={closeAll}>Close All</button>
          <button onClick={() => setDrawerOpen(true)}>Open Drawer</button>
        </div>
      </header>

      <div className="accordion-container">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${openItems.includes(index) ? 'open' : ''}`}
          >
            <button
              className="accordion-title"
              onClick={() => toggleItem(index)}
            >
              <span>{item.title}</span>
              <span className="accordion-icon">
                {openItems.includes(index) ? '−' : '+'}
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="debug-section">
        <h3>Debug Info:</h3>
        <p>Open items: [{openItems.join(', ')}]</p>
        <p>Drawer open: {drawerOpen ? 'Yes' : 'No'}</p>
      </div>

      {/* Drawer Overlay */}
      {drawerOpen && (
        <div className="drawer-overlay" onClick={() => setDrawerOpen(false)}>
          <div className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h2>Drawer</h2>
              <button className="drawer-close" onClick={() => setDrawerOpen(false)}>
                ×
              </button>
            </div>
            <div className="drawer-content">
              <p>This is the drawer content.</p>
              <p>The accordions behind this drawer remain in their current state.</p>
              <p>You can add any content here for testing purposes.</p>
              <div className="drawer-section">
                <h3>Sample Section</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="drawer-section">
                <h3>Another Section</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordionTest;
