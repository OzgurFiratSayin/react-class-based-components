import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  // This is to practice the method, will execute 3 prints as there are 3 User components
  componentWillUnmount() {
    console.log("User component unmounts");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
