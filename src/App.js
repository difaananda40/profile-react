import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from "./Main";
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <div>
        <CssBaseline>
        <Main/>
        </CssBaseline>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
