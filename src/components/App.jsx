import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '..components/Home';
import Catalog from '../components/Catalog';
import Favorites from '../components/Favorites';
import Header from '../components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/favorites" component={Favorites} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
