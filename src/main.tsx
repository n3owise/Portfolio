import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TwentyFirstToolbar } from '@21st-extension/toolbar-react';
import { ReactPlugin } from '@21st-extension/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <TwentyFirstToolbar config={{ plugins: [ReactPlugin] }} />
  </StrictMode>,
);
