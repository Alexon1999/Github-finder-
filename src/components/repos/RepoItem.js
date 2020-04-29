import React from 'react';
import PropTypes from 'prop-types';

export const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};

export default RepoItem;

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
