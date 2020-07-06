import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/skills' component={Skills} />

        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    );
  }
}

export default Routes;
