import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// class UserItem extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     id: 1,
//   //     login: 'Alex',
//   //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//   //     html_url: 'https://github.com/octocat',
//   //   };
//   // }

//   //! on a pas besoin de constructor pour définir state
//   // state = {
//   //   id: 1,
//   //   login: 'Alex',
//   //   avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//   //   html_url: 'https://github.com/octocat',
//   // };

//   render() {
//     //++ Destructuring
//     const { avatar_url, login, html_url } = this.props.user;
//     return (
//       <div className='card text-center'>
//         <img
//           src={avatar_url}
//           className='round-img'
//           style={{ width: '20%' }}
//           alt=''
//         />
//         <h3>{login}</h3>
//         <div>
//           <a
//             href={html_url}
//             target='_blank'
//             rel='noopener noreferrer'
//             className='btn btn-dark btn-small my-1'>
//             More information
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// * Convert to functional component

// // 1)
// function UserItem() {
//   return (
//     <div>

//     </div>
//   )
// }

// // 2)
const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  // const { avatar_url, login, html_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        style={{ width: '20%' }}
        alt=''
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          // target='_blank'
          // rel='noopener noreferrer'
          className='btn btn-dark btn-small my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
