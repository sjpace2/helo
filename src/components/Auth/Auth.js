import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { displayUser } from './../../ducks/reducer';

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
    }).then((response) => {
      
      this.props.history.push('/dashboard')
      this.props.displayUser(response.data[0].username, response.data[0].id, response.data[0].profile_pic);
      
      
    })
  }

  loginExistingUser = () => {
    axios.post('/api/register', {
      username: this.state.username,
      password: this.state.password
    }).then((response) => {
      this.props.history.push('/dashboard')
      this.props.displayUser(response.data[0].username, response.data[0].id, response.data[0].profile_pic);
    })
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
  
  export default connect(null, { displayUser })(Auth);