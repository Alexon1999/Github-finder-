import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  // *attach the state to input
  state = {
    text: '',
  };

  onChange = (e) => {
    // key and the value
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    // Show an alert message , if there is nothing in the input
    if (this.state.text === '') {
      this.props.setAlert('Please enter smthing', 'light');
    } else {
      this.props.searchUsers(this.state.text);

      //* clear text after the submit
      this.setState({ text: '' });
    }
  }

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users ..'
            // *attach the state to input
            value={this.state.text}
            // * update the state
            // onChange={(e) => this.setState({ text: e.target.value })}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {/* * (condition)  && : éqivalent du if  * */}
        {/* (condition)  ? (if) :(else) */}
        {/* && : exécute après la vérification devant  */}
        {/* ici si showClear est vrai , il execute ce qui est après (button) */}
        {/* expressions conditional : { } */}
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
