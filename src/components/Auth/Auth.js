import React, { Component } from 'react';

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

  render() {
      return (
        <div>
          Auth
          <input onChange={ e => this.handleUsernameChange(e.target.value) } type="text"/>
          <input onChange={ e => this.hanldePasswordChange(e.target.value) } type="text"/>
          <button>Login</button>
          <button>Register</button>
        </div>
      );
    }
  }
  
  export default Auth;