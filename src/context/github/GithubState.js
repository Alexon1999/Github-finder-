import React, { useReducer, useState, useContext } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../Types';

// env.local
let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  // * Github global state
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //* state and action
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    // * on change le loading au true ,
    setLoading();

    //* puis on fait le requete http
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  // + Get a single Github user
  const getUser = async (userName) => {
    setLoading();

    //* puis on fait le requete http
    const response = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

    const data = response.data;
    //   //   // data : donne un arrays of object
    console.log(data);

    // * pui on met les données dans users et on remet le loading à false
    dispatch({
      type: GET_USER,
      payload: data,
    });
  };

  // + Get a single Github user Repos
  const getUserRepos = async (userName) => {
    setLoading();

    //* puis on fait le requete http
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

    const data = response.data;
    //   //   // data : donne un arrays of object
    console.log(data);

    // * pui on met les données dans users et on remet le loading à false
    dispatch({
      type: GET_REPOS,
      payload: data,
    });
  };

  // + ClearUsers from state
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
