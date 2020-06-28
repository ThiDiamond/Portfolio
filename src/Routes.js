import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Challenges from './pages/Challenges';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/challenges' component={Challenges} />
        <Route exact path='/Portfolio' component={Portfolio} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
