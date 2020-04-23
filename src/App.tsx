import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TodosPag } from './pages/TodosPag';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPag} path="/" exact />

          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
