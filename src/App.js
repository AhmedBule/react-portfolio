import React from 'react';
import {BrowserRouter, Switch,Route} from "reac-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Aboutme from "./components/Aboutme";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Switch>
      <Route exact path ="/"><Aboutme /></Route>
      <Route exact path ="/Aboutme"><Aboutme /></Route>
      <Route exact path ="/portfolio"><Portfolio /></Route>
      <Route exact path ="/contact"><Contact /></Route>
      </Switch>
      </BrowserRouter>
       <Footer />
     
    </div>
  );
}

export default App;
