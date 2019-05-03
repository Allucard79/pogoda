import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/day/:day" component={Details}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
