import React from 'react';
// * proptype : shortcut
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// class Navbar extends Component {
//   // //  on peut utiliser notre propre props , on crée nous meme avec static qu'on peut avaor dans notre classse
//   // c'est pardéfaut
//   static defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github',
//   };

//   // ? c'est pour faire des tests
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//   };

//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         <h1>
//           <i className={this.props.icon}></i>
//           {this.props.title}
//         </h1>
//       </nav>
//     );
//   }
// }

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

// const Navbar = (defaultProps) => {
//   return (
//     <nav className='navbar bg-primary'>
//       <h1>
//         <i className={defaultProps.icon} />
//         {defaultProps.title}
//       </h1>
//     </nav>
//   );
// };

// * Props local qu'on a dans la fonction Navbar
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

// ? c'est pour faire des tests
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
