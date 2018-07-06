import React, { Component } from 'react';

class Dashboard extends Component {
    constructor () {
      super()
      this.state={
        posts: [],
        search: '',
        myPosts: true
      }
    }

    handleSearchInputChange = (value) => {
      this.setState({
        search: value
      })
    }

    handleCheckboxChange = (e) => {
      // e === 'checkbox' ? e.checked : e.value;
    }
  
    render() {
      
      let filteredPosts = this.state.posts.map((post, index)=>{
        return (post.title, post.username, post.profile_pic)
      })
      
      return (
        <div>
          Dashboard
          <input onChange={ (e) => {this.handleSearchInputChange(e.target.value)}} type="text"/>
          
          My Posts
          <input type = "checkbox" name = 'myPosts' checked = { this.state.myPosts } onChange = {e=>this.handleCheckboxChange(e.target.value)} />
          
          <button>Search</button>
          <button>Reset</button>
          
        </div>
      );
    }
  }
  
  export default Dashboard;