import React, { useState, useCallback } from 'react';
import { createRoot } from "react-dom/client";
import LoadingOverlay from 'react-loading-overlay-ts';

const App = () => {
  const [isActive, setActive] = useState(true)
  setTimeout(() => setActive(value => !value), 3000)

  return (
    <LoadingOverlay
      active={isActive}
      spinner
      text='Loading your content...'
    >
      <div style={{ height: '100vh' }}>
        <p>Some content or children or something.</p>
      </div>
    </LoadingOverlay>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App />);
});
