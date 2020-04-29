// * when a fonction / class or something is not bringdown without default , we have to put in {} : curly braces (export default ) : not have to put in {}
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';
import { UserProvider } from './components/context/UsersContext';
import Alert from './components/layouts/Alert';
import User from './components/users/User';

export class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    //* empty object , better do with null
    alert: null,
  };

  // it 's like render
  // ce la est exécuté quand le component est lancé, ici il va exécuter tt à
  //* exécute au chargement du component App
  // componentDidMount() {
  //   //! Axios (npm i axios) : Ajax bibliothèque
  //   // axios
  //   //   .get('https://api.github.com/users')
  //   //   .then((res) => console.log(res.data));
  //   //   // res.data : donne un arrays of object

  // }
  // on utilise async await au lieu de .then
  async componentDidMount() {
    // * on change le loading au true ,
    this.setState({ loading: true });

    //* puis on fait le requete http
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

    const data = response.data;
    //   //   // data : donne un arrays of object
    // console.log(data);

    // * puis on met les données dans users et on remet le loading à false
    this.setState({ users: data, loading: false });
  }

  // ! Fetch : javascript HTTP request
  // async componentDidMount() {
  //   const response = await fetch('https://api.github.com/users');
  //   const data = await response.json();
  //   console.log(data);
  // }

  //+ Search github users
  // ? arrow function and async
  searchUsers = async (text) => {
    // * on change le loading au true ,
    this.setState({ loading: true });

    //* puis on fait le requete http
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

    const data = response.data.items;
    //   //   // data : donne un arrays of object
    console.log(data);

    // * pui on met les données dans users et on remet le loading à false
    this.setState({ users: data, loading: false });
  };

  // + Get a single Github user
  getUser = async (userName) => {
    this.setState({ loading: true });

    //* puis on fait le requete http
    const response = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

    const data = response.data;
    //   //   // data : donne un arrays of object
    console.log(data);

    // * pui on met les données dans users et on remet le loading à false
    this.setState({ user: data, loading: false });
  };
  // + Get a single Github user Repos
  getUserRepos = async (userName) => {
    this.setState({ loading: true });

    //* puis on fait le requete http
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

    const data = response.data;
    //   //   // data : donne un arrays of object
    console.log(data);

    // * pui on met les données dans users et on remet le loading à false
    this.setState({ repos: data, loading: false });
  };

  // + ClearUsers from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // + Alert Message
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    const { users, loading, user, repos, alert } = this.state;
    return (
      <Router>
        {/* <UserProvider> */}
        <div className='App'>
          {/* <NavBar title='Github Finder' icon='fab fa-github' /> */}
          <NavBar />
          <div className='container'>
            <Alert alert={alert} />

            <Switch>
              <Route
                path='/'
                exact
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route path='/about' exact component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
        {/* </UserProvider> */}
      </Router>
    );
  }
}

export default App;
