import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import './index.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import 'semantic-ui-css/semantic.min.css';


const App = () => {
  return (

<>
<Navigation/>
<BrowserRouter>
    <Home />
  </BrowserRouter>
  </> 
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

