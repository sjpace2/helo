module.exports = {
    register: (req, res) => {
        const { username, password, profile_pic } = req.body;
        req.app.get('db').registerNewUser([username, password, profile_pic])
        .then( newUser => {
            
            res.status(200).send(newUser)})
        
    },
    
    login: (req, res) => {
        const { username, password } = req.body;
        req.app.get('db').loginUser([username, password])
        .then( existingUser => res.status(200).send(existingUser))
    },

    retrievePosts: (req, res) => {
        const {userposts, search, id} = req.query;
        
        if(userposts && search){
            req.app.get('db').retrievePostsSearch([search])
            .then ( post => res.status(200).send( post ))
            
        }

        else if(!userposts && !search){
            req.app.get('db').retrieveNotAuthor([id])
            .then ( posts => res.status(200).send( posts ))
        }

        else if(!userposts && search){
            req.app.get('db').retrieveSearchNotAuthor([id, search])
            .then ( posts => res.status(200).send( posts ))
        }

        else if(userposts && !search){
            req.app.get('db').retrieveAllPosts()
            .then ( posts => res.status(200).send( posts ))
        }

    } 
   
}