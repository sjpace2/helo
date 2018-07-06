import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


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
  
    searchPosts = () => {
      axios.get('/api/posts', this.state.id, this.state.search, this.state.myPosts)
      .then(response => {
        console.log(response)
        this.setState({
          posts: response.data
        })
      })
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
          
          <button onClick = {this.searchPosts} >Search</button>
          <button>Reset</button>
          
        </div>
      );
    }
  }
  
  function mapStateToProps(state){
    return {
      id: state.id
    }
  }


  export default connect(mapStateToProps)(Dashboard);