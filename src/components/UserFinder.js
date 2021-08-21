import { Component, Fragment } from 'react';

import Users from './Users';

import classes from './UserFinder.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      filteredUsers: []
    };
  }
  
  // Will execute only when the App, consequently UserFinder runs for the first time (like useEffect with no dependency)
  componentDidMount() {
    // fetch the current users list for example
    this.setState ( { filteredUsers: DUMMY_USERS })
  }
  
  // Will execute on each state change (like useEffect for functions with dependencies)
  // This could be handled in searchChangeHandler method as well
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({ filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');
// 
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);
// 
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };
// 
//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
