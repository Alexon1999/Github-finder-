import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // *attach the state to input
  const [text, setText] = useState('');

  // ! Si on veut fonction dans fonction on met dans const ou let
  const onChange = (e) => {
    // key and the value
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Show an alert message , if there is nothing in the input
    if (text === '') {
      alertContext.setAlert('Please enter smthing', 'light');
    } else {
      githubContext.searchUsers(text);

      //* clear text after the submit
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users ..'
          // *attach the state to input
          value={text}
          // * update the state
          // onChange={(e) => this.setState({ text: e.target.value })}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
