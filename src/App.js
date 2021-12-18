import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Gig from './pages/gig/Gig';
import GigCreate from './pages/gig/GigCreate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/gig/create" exact component={GigCreate} />
        <Route path="/gig" exact component={Gig} />
        <Route path="/orders/:type" exact component={Orders} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;