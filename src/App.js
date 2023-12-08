import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Workouts from './components/pages/Workouts';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Nutrition from './components/pages/Nutrition';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/workouts' component={Workouts} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/nutrition' component={Nutrition} />  
        </Switch>
      </Router>
    </>
  );
}

export default App;
