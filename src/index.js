import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/style.css'
import '../src/css/buttons.css'
import '../src/slick/slick.css'
import '../src/slick/slick-theme.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home/home';
import DesignEditorial from './pages/design_editorial/design_editorial';

ReactDOM.render(
    
      <BrowserRouter>
        <div className="row">
          <div className="col-md-1 col-2"></div>
          <App />
          <div className="header col-md-11 col-10">
            <header className="nome col-10 text-black"></header>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/design_editorial" component={DesignEditorial} />
            </Switch>
            </div>
        </div>
        
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
