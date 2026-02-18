import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ui/ScrollToTop.jsx';

import '@radix-ui/themes/styles.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
);
