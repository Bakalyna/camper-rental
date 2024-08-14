import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Catalog from '../components/Catalog/Catalog';
import Favorites from '../components/Favorites/Favorites';
import Header from '../components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      {/* <Switch> */}
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/favorites" component={Favorites} />
        <Route path="*" component={Home} />
        {/* </Switch> */}
      </Routes>
    </Router>
  );
}

export default App;
