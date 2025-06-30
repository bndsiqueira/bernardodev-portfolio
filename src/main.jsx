import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Estilos (index primeiro, depois globals)
import './index.css';
import './globals.css';

// App principal
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
