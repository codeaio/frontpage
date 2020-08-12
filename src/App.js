import React from 'react';
import Header from './components/home/header';
import Main from './components/home/main';
import Footer from './components/home/footer';
import Docs from './components/docs/docs';
import Wrapper  from "./components/home/wrapper";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={Wrapper} exact/>
        <Route path="/docs" component={Docs} />
      </Switch>
    </div>
  );
}

export default App;
