import React from 'react';
import { connect } from 'react-redux';


function Nav (props) {
  
   
    return (
       <div>
        <h3>Nav</h3>
        <button>Home</button>
        <button>New Post</button>
        <button>Logout</button>
            <div>
                <h4>
                    {props.username}
                    {props.profile_pic}
                </h4>
            </div>
       </div>
   )
}

function mapStateToProps (state) {
    return {
        username: state.username,
        profile_pic: state.profile_pic
    }
}

export default connect(mapStateToProps)(Nav)
