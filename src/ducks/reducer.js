let initialState = {
    username: '',
    id: 0,
    profile_pic: ''
}

const LOGIN_USER = 'LOGIN_USER';

export default function reducer( state = initialState, action) {
    console.log(action)
    switch(action.type) {
        
        case LOGIN_USER:
            return Object.assign({}, state, {username: action.payload.username, id: action.payload.id, profile_pic: action.payload.profile_pic})
        
        default: 
            return state;
    }
}

export function displayUser ( username, id, profile_pic) {
    return {
        type: LOGIN_USER,
        payload: { username, id, profile_pic}
    }
}