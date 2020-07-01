import React, {useEffect, useState} from 'react';
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import LatestMovies from './pages/LatestMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import Search from './pages/Search';
import './App.css';

const Footer = styled.footer`
  text-align: center;
  font-size: 0.6875em;
  padding: 1.5em;
  color: #c0c0c0;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>

        <Switch>
          <Route path="/latest" component={LatestMovies}/>
          <Route path="/upcoming" component={UpcomingMovies}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </BrowserRouter>

      <Footer>Designed by <a href="https://github.com/LindieK">Linda Okorie</a></Footer>
    </div>
  );
}

export default App;
