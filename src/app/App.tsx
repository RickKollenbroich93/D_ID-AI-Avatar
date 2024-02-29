import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default App;
