import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import 'semantic-ui-css/semantic.min.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Home />
  </Router>
);

