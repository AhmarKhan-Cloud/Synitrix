import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Keep the visible email link simple while opening a pre-addressed Gmail compose window.
document.addEventListener('click', (event) => {
  const link = (event.target as Element).closest('a[href="mailto:anasakram0644@gmail.com"]');
  if (!link) return;
  event.preventDefault();
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=anasakram0644@gmail.com', '_blank', 'noopener,noreferrer');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
