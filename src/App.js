import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import img from './images/popcorn.jpg';


const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url(${img});
  background-color: white; 
  font-family: 'Shadows Into Light', cursive;
}
`;

function App() {
  return (
    <>
      <Router>
      <GlobalStyle />
        <Switch>
          <Route exact path='/' render={Home} />
          <Route path='/about' component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
