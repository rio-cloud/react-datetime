// This is the entry file for the playground, not part of the library
// it's used by running `npm run playground`

import React from 'react';
import { createRoot } from 'react-dom/client';
import '../../css/react-datetime.css';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
