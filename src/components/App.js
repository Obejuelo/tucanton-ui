import React from 'react';
import Home from '../pages/Home';
import Equipo from '../pages/Equipo';
import {Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Navbar from './Navbar';
import Usuario from '../pages/Usuario';
import Cliente from '../pages/Cliente';

function App() {
  return (
    <div>
      <div className="bg-dark">
        <Navbar/>
      </div>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
							key={location.key}
							timeout={300}
							classNames="fade">

            {/* Routes and pages */}
            <Switch location={location}>
              <Route exact path='/' component={Home}/>
              <Route path='/equipo' component={Equipo}/>
              <Route path='/usuario' component={Usuario}/>
              <Route path='/cliente' component={Cliente}/>
            </Switch>

          </CSSTransition>
        </TransitionGroup>
      )}>
      </Route>
    </div>
  );
}

export default App;
