import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Articles from './pages/Articles';
import Home from './pages/Home';

// PRO-END

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/articles' component={Articles} />
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
