import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component {
  constructor () {
    super()
    this.state={  
      username: '',
      password: ''
    }
  }  
  
  handleUsernameChange = (value) => {
    this.setState({
      username: value
    })
  }

  hanldePasswordChange = (value) => {
    this.setState({
      password: value
    })
  }

  registerNewUser = () => {
    axios.post('/api/register', {
      username: this.state.username,
      password: this.state.password
    }).then(this.props.history.push('/dashboard'))
  }

  loginExistingUser = () => {
    axios.post('api/register', {
      username: this.state.username,
      password: this.state.password
    }).then(this.props.history.push('/dashboard'))
  }



  render() {
      return (
        <div>
          Auth
          <input onChange={ e => this.handleUsernameChange(e.target.value) } type="text"/>
          <input onChange={ e => this.hanldePasswordChange(e.target.value) } type="text"/>
          <button onClick = { this.loginExistingUser }>Login</button>
          <button onClick = { this.registerNewUser }>Register</button>
        </div>
      );
    }
  }
  
  export default Auth;