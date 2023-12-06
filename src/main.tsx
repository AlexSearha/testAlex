// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import App from './App';
import { ThemeContextProvider } from './theme/ThemeContextProvider';
// CSS
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
