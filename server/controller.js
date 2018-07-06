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
        const {userposts, search, id} = req.params;
        
        if(userposts && search){
            req.app.get('db').retrievePostsSearch([search])
            .then ( post => res.status(200).send( post ))
        }

        else if(!userposts && !search){
            req.app.get('db').retrieveNotAuthor([id])
            .then ( posts => res.status(200).send( posts ))
        }

        else if(!userposts && search){
            req.app.get('db').retrieveSearchNotAuthor([search, id])
            .then ( posts => res.status(200).send( posts ))
        }

        else if(userposts && !search){
            req.app.get('db').retrieveAllPosts([userposts])
            .then ( posts => res.status(200).send( posts ))
        }



        // req.app.get('db').retrievePosts([userposts, search, id])
        // .then ( post => res.status(200).send( post ))
    }
}