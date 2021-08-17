import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Characters } from './pages/Characters';
import { Episodes } from './pages/Episodes';
import { Locations } from './pages/Locations';
import { MyWatchList } from './pages/MyWatchList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={'/'} component={Characters} />
        <Route exact path={'/episodes'} component={Episodes} />
        <Route exact path={'/locations'} component={Locations} />
        <Route exact path={'/myWatchList'} component={MyWatchList} />
      </Switch>
    </>
  );
}

export default App;
