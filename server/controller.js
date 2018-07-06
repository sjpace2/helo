module.exports = {
    register: (req, res) => {
        const { username, password } = req.body;
        req.app.get('db').registerNewUser([username, password])
        .then( newUser => res.status(200).send(newUser))
    }
}