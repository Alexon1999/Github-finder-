// * when a fonction / class or something is not bringdown without default , we have to put in {} : curly braces (export default ) : not have to put in {}
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About';
import './App.css';
import { UserProvider } from './components/context/UsersContext';
import Alert from './components/layouts/Alert';
import User from './components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   //* empty object , better do with null
  //   alert: null,
  // };

  return (
    <GithubState>
      <AlertState>
        <Router>
          {/* <UserProvider> */}
          <div className='App'>
            {/* <NavBar title='Github Finder' icon='fab fa-github' /> */}
            <NavBar />
            <div className='container'>
              <Alert />

              <Switch>
                <Route
                  path='/'
                  exact
                  component={Home}
                  //   render={(props) => (
                  //     <Fragment>
                  //       <Search />
                  //       <Users />
                  //     </Fragment>
                  //   )}
                />
                <Route path='/about' exact component={About} />
                <Route
                  exact
                  path='/user/:login'
                  // Comme il y a beacoup de component on peut enlever render
                  component={User}
                />
                <Route exact component={NotFound} />
              </Switch>
            </div>
          </div>
          {/* </UserProvider> */}
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
