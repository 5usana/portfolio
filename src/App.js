import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' render={Home} />
          <Route path='/about' component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
