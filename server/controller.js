module.exports = {
    register: (req, res) => {
        const { username, password, profile_pic } = req.body;
        req.app.get('db').registerNewUser([username, password, profile_pic])
        .then( newUser => res.status(200).send(newUser))
    }
}