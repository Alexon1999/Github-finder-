import React, { useContext } from 'react';
import UserItem from './UserItem';
import UsersContext from '../context/UsersContext';
import Spinner from '../layouts/Spinner';
// impt : proptype shortcut

import GithubContext from '../../context/github/GithubContext';

// class Users extends Component {
//   // state = {
//   //   users: [
//   //     {
//   //       id: 1,
//   //       login: 'Alex',
//   //       avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//   //       html_url: 'https://github.com/octocat',
//   //     },
//   //     {
//   //       id: 2,
//   //       login: 'John',
//   //       avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//   //       html_url: 'https://github.com/octocat',
//   //     },
//   //     {
//   //       id: 3,
//   //       login: 'AlDoex',
//   //       avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//   //       html_url: 'https://github.com/octocat',
//   //     },
//   //   ],
//   // };
//   render() {
//     return (
//       <div style={userStyle}>
//         {this.props.users.map((user) => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   }
// }

// * This classs have not state so : we
//* Convert  to function :

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

// * On peut utilise hooks que dans les fonctional component
// ! TODO: Context  : UsersContext
// function Users() {
//   const [users, setUsers] = useContext(UsersContext);
//   return (
//     <div style={userStyle}>
//       {users.map((user) => (
//         <UserItem key={user.id} user={user} />
//       ))}
//     </div>
//   );
// }

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3 , 1fr)',
  gridGap: '1rem',
};

export default Users;
