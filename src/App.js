import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import MyWatchList from './pages/MyWatchList';
import './App.css';





function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/characters' component={Characters} />
          <Route path='/episodes' component={Episodes} />
          <Route path='/locations' component={Locations} />
          <Route path='/myWatchList' component={MyWatchList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
