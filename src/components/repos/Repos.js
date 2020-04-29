import React, { Fragment } from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

export default function Repos({ repos }) {
  return (
    <Fragment>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </Fragment>
  );
}

// import React from 'react'

// export const Repos = () => {
//   return (
//     <div>

//     </div>
//   )
// }

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
